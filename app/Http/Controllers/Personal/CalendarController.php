<?php

namespace App\Http\Controllers\Personal;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
class CalendarController extends Controller
{
    //render interface
    public function index(Request $request) {
        $personalTask = Task::where('creator',Auth::id())->with('creator','assignee')->get();
        return Inertia::render('Personal/Calendar',['tasks' => $personalTask]);
    }
}
