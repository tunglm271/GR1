<?php

namespace App\Http\Controllers\Personal;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DashboardController extends Controller
{
    //render interface
    public function index(Request $request) {
        $users = User::find(1);
        return Inertia::render('Personal/Dashboard',$users);
    }
}
