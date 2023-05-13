<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Repositories\Contracts\Admin\CompanyInterface;
use App\Traits\ApiResponse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CompanyController extends Controller
{
    use ApiResponse;

    /**
     * @var CompanyInterface
     */
    protected CompanyInterface $companyInterface;

    /**
     * @param CompanyInterface $companyInterface
     */
    public function __construct(CompanyInterface $companyInterface)
    {
        $this->companyInterface = $companyInterface;
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function index(): Response|Application|ResponseFactory
    {
        $companies = $this->companyInterface->index();

        return $this->apiResponse('successfully', $companies);
    }

    /**
     * @return Application|ResponseFactory|Response
     */
    public function indexName(): Response|Application|ResponseFactory
    {
        $companies = $this->companyInterface->indexName();

        return $this->apiResponse('successfully', $companies);
    }


    /**
     * @return Application|ResponseFactory|Response
     */
    public function show($id): Response|Application|ResponseFactory
    {
        $companies = $this->companyInterface->show($id);

        return $this->apiResponse('successfully', $companies);
    }

    /**
     * @param StoreCompanyRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function store(StoreCompanyRequest $request): Response|Application|ResponseFactory
    {
        $company = $this->companyInterface->store($request);

        return $this->apiResponse('successfully store', $company);
    }

    /**
     * @param UpdateCompanyRequest $request
     * @return Application|ResponseFactory|Response
     */
    public function update(UpdateCompanyRequest $request): Response|Application|ResponseFactory
    {
        $company = $this->companyInterface->update($request);

        return $this->apiResponse('successfully updated', $company);
    }

    /**
     * @param $id
     * @return Application|ResponseFactory|Response
     */
    public function destroy($id): Response|Application|ResponseFactory
    {
        $company = $this->companyInterface->destroy($id);

        return $this->apiResponse('successfully updated', $company);
    }
}
