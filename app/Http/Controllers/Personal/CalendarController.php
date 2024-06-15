<?php

namespace App\Http\Controllers\Personal;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalendarController extends Controller
{
    //render interface
    public function index(Request $request) {
        return Inertia::render('Personal/Calendar');
    }
}
