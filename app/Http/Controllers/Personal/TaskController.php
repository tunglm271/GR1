<?php

namespace App\Http\Controllers\Personal;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Repositories\TaskRepository;
class TaskController extends Controller
{

    protected $taskRepository;

    public function __construct(TaskRepository $taskRepository) {
        $this->taskRepository = $taskRepository;
    }

    public function index(Request $request) {
        $personalTask = $this->taskRepository->getPersonalTask();
        return Inertia::render('Personal/Tasks',['tasks' => $personalTask]);
    }
    
    public function createTask(Request $request) {
        $attributes = $request->only('name', 'description', 'deadline', 'priority', 'assignee');
        if ($request->has('assignee') && User::where('id', $request->assignee)->exists()) {
            $attributes['assignee'] = $request->assignee;
        }

        $this->taskRepository->createTask($attributes);
    }

    public function checkTask(Request $request) {
        $this->taskRepository->check($request->id);
    }

    public function unCheckTask(Request $request) {
        $this->taskRepository->unCheck($request->id);
    }

    public function deleteMultiTask(Request $request) {
        $this->taskRepository->deleteMulti($request->checkedTasks);
    }
}
