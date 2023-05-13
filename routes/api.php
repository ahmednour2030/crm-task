<?php

use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\CompanyController;
use App\Http\Controllers\Api\Admin\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/** Auth Section */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
});

Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'admin'], function () {

    Route::get('companies/name', [CompanyController::class, 'indexName']);

    Route::apiResource('companies', CompanyController::class)
        ->only([
            'index', 'show', 'store', 'destroy'
        ]);

    Route::post('companies/update', [CompanyController::class, 'update']);

    Route::apiResource('employees', EmployeeController::class)
        ->only([
            'index', 'show', 'store', 'destroy'
        ]);

    Route::post('employees/update', [EmployeeController::class, 'update']);

});


