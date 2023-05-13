<?php

namespace App\Repositories\Eloquents\Admin;

use App\Mail\CreateCompanyMail;
use App\Repositories\Contracts\Admin\CompanyInterface;
use App\Models\Company;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;

class CompanyRepository implements CompanyInterface
{
    /**
     * @var Company
     */
    protected Company $companyModel;

    /**
     * @param Company $company
     */
    public function __construct(Company $company)
    {
        $this->companyModel = $company;
    }

    /**
     * @return mixed
     */
    public function index(): mixed
    {
        $email = request()->email;

        return $this->companyModel
            ->when($email, fn($query) => $query->where('email', $email))
            ->get();
    }

    /**
     * @return Collection|array
     */
    public function indexName(): Collection|array
    {
        return $this->companyModel->query()->get(['id', 'name']);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id): mixed
    {
        return $this->companyModel->whereId($id)->with('employees')->first();
    }

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed
    {
       $company = $this->companyModel->create([
            'name' => $data->name,
            'email' => $data->email,
            'url' => $data->url,
        ]);

        if ($data->hasFile('logo') && $data->file('logo')->isValid()) {
            $company->addMediaFromRequest('logo')->toMediaCollection('logo');
        }

        Mail::to($data->email)->send(
            new CreateCompanyMail('create new company for you')
        );

        return $company;
    }

    /**
     * @param $data
     * @return mixed
     */
    public function update($data): mixed
    {
        $company = $this->companyModel->find($data->id);

        $company->update([
            'name' => $data->name,
            'email' => $data->email,
            'url' => $data->url,
        ]);

        if ($data->hasFile('logo') && $data->file('logo')->isValid()) {
            $data->clearMediaCollection('logo');
            $data->addMediaFromRequest('logo')->toMediaCollection('logo');
        }

        return $company;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed
    {
        $company = $this->companyModel->find($id);

        return $company->delete();
    }
}
