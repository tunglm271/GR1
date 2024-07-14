<?php

namespace App\Repositories;
use Illuminate\Support\Facades\Auth;
use App\Models\Workspace;
use App\Models\User;
class WorkspaceRepository {
    protected $model = Workspace::class;

    public function creete($attributes) {
        $workspace = new Workspace($attributes);
        $workspace->host = Auth::id();
        $workspace->save();
        $user = User::find(Auth::id());
        $user->workspaces()->attach($workspace->id);
        return $workspace;
    }
    
}