<?php

namespace App\Http\Controllers\Personal;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
class DashboardController extends Controller
{
    //render interface
    public function index(Request $request) {
        $numOfLateTask = count(Task::where('creator',Auth::id())->where('deadline','<', new \DateTime())->where('status',0)->get());
        $numOfToDoTask = count(Task::where('creator',Auth::id())->where('deadline','>=', new \DateTime())->where('status',0)->get());
        $numOfCompletedTask = count(Task::where('creator',Auth::id())->where('status',1)->get());
        return Inertia::render('Personal/Dashboard',['LateTaskNumber' => $numOfLateTask,'ToDoTaskNumber' => $numOfToDoTask, 'CompletedTaskNumber' => $numOfCompletedTask]);
    }
}
