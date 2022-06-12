<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json($user);
    }

    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'data' => $validated->errors(),
                'status' => false
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
                'message' => 'User created successfully',
                'data' => $user,
                'status' => true
            ], 201);
    }

    public function update(Request $request, $id)
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'data' => $validated->errors(),
                'status' => false
            ], 422);
        }

        // cek email di user lain
        // jika ada maka return error
        $user_other = User::where('email', $request->email)->where('id', '!=', $id)->first();
        if ($user_other) {
            return response()->json([
                'message' => 'Validated failed',
                'data' => (object) ['email' => ['Email already exists']],
                'status' => false
            ], 422);
        }

        $user = User::findOrFail($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
                'message' => 'User updated successfully',
                'data' => $user,
                'status' => true
            ], 200);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
                'message' => 'User deleted successfully',
                'data' => $user,
                'status' => true
            ], 200);
    }
}
