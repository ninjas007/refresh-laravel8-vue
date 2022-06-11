<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthControlller extends Controller
{
    public function register(Request $request)
    {
        return response()->json([
            'message' => 'Register success',
            'data' => $request->all()
        ]);
    }
}
