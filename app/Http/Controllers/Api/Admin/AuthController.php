<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    use ApiResponse;

    /**
     * @var User
     */
    protected User $userModel;

    /**
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->userModel  = $user;
    }

    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    public function login(Request $request): Response|Application|ResponseFactory
    {
        $user = $this->userModel->whereEmail($request->email)->first();

        if ($user) {
            if (!Hash::check($request->password, $user->password)) {
                $message = 'Wrong password';
                return $this->apiResponse($message, null, 'not authorized', false, 403);
            }

            $token = $user->createToken('token')->plainTextToken;

            return $this->apiResponse('successfully', $user, null, true, 200 , $token);
        }
        return $this->apiResponse('not found user', null, 'not found user', false, 403);
    }
}
