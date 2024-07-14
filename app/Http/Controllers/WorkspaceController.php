<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\WorkspaceRepository;
use Inertia\Inertia;
use App\Models\Workspace;
class WorkspaceController extends Controller
{
    protected $workspaceRepo;



    public function __construct(WorkspaceRepository $workspaceRepository) {
        $this->workspaceRepo = $workspaceRepository;
    }

    public function viewWorkspace(Request $request, $id) {
        $workspace = Workspace::find($id);
        return inertia::render('Workspace/Main',['workspace'=> $workspace]);
    }

    public function createWorkspace(Request $request) {
        $attributes = $request->only('name','description');
        $this->workspaceRepo->creete($attributes);
    }
}
