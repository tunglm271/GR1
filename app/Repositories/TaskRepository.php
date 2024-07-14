<?php

namespace App\Repositories;

use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskRepository {
    

    protected $model = Task::class;

    public function getPersonalTask() {
        return $this->model::where('creator',Auth::id())->with('creator','assignee')->get();
    }
    
    public function createTask($attributes) {
        $task = new Task($attributes);
        $task->creator = Auth::id();
        $task->status = 0;
        $task->save();

        return $task;
    }

    public function check($taskId) {
        return $this->model::find($taskId)->update(array('status' => 1));
    }

    public function unCheck($taskId) {
        return $this->model::find($taskId)->update(array('status' => 0));
    }

    public function deleteMulti(array $taskIds) {
        return $this->model::destroy($taskIds);
    }
}