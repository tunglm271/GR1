<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Personal\DashboardController;
use App\Http\Controllers\Personal\CalendarController;
use App\Http\Controllers\Personal\TaskController;
use App\Http\Controllers\WorkspaceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::prefix('/personal')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[DashboardController::class, 'index'])->name('dashboard');
    
    Route::get('/calendar', [CalendarController::class,'index'])->name('calendar');

    Route::prefix('/tasks')->group(function () {
        Route::get('', [TaskController::class,'index'])->name('view');
        Route::post('/create', [TaskController::class,'createTask'])->name('create');
        Route::post('/multi-delete',[TaskController::class,'deleteMultiTask'])->name('delete-all');
        Route::post('/check/{id}',[TaskController::class,'checkTask'])->name('check');
        Route::post('/uncheck/{id}',[TaskController::class,'unCheckTask'])->name('check');
    })->name('tasks');

})->name("personal");


Route::prefix('/workspace')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/{id}',[WorkspaceController::class,'viewWorkspace'])->name('view');
    Route::post('/create',[WorkspaceController::class,'createWorkspace'])->name('create');
})->name("workspace");


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
