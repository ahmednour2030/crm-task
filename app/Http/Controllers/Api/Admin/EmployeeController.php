<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Repositories\Contracts\Admin\CompanyInterface;
use App\Repositories\Contracts\Admin\EmployeeInterface;
use App\Traits\ApiResponse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EmployeeController extends Controller
{

    use ApiResponse;

    /**
     * @var EmployeeInterface
     */
    protected EmployeeInterface $employeeInterface;

    /**
     * @param EmployeeInterface $employeeInterface
     */
    public function __construct(EmployeeInterface $employeeInterface)
    {
        $this->employeeInterface = $employeeInterface;
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function index(): Response|Application|ResponseFactory
    {
        $employees = $this->employeeInterface->index();

        return $this->apiResponse('successfully', $employees);
    }

    /**
     * @param $id
     * @return Application|ResponseFactory|Response
     */
    public function show($id): Response|Application|ResponseFactory
    {
        $employee = $this->employeeInterface->show($id);

        return $this->apiResponse('successfully', $employee);
    }

    /**
     * @param StoreEmployeeRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function store(StoreEmployeeRequest $request): Response|Application|ResponseFactory
    {
        $employee = $this->employeeInterface->store($request);

        return $this->apiResponse('successfully store', $employee);
    }

    /**
     * @param UpdateEmployeeRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function update(UpdateEmployeeRequest $request): Response|Application|ResponseFactory
    {
//        dd($request);

        $company = $this->employeeInterface->update($request);

        return $this->apiResponse('successfully updated', $company);
    }

    /**
     * @param $id
     * @return Application|ResponseFactory|Response
     */
    public function destroy($id): Response|Application|ResponseFactory
    {
        $company = $this->employeeInterface->destroy($id);

        return $this->apiResponse('successfully updated', $company);
    }
}
