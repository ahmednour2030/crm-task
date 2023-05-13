<?php

namespace App\Repositories\Eloquents\Admin;

use App\Repositories\Contracts\Admin\EmployeeInterface;
use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class EmployeeRepository implements EmployeeInterface
{
    /**
     * @var Employee
     */
    protected Employee $employeeModel;

    /**
     * @param Employee $employee
     */
    public function __construct(Employee $employee)
    {
        $this->employeeModel = $employee;
    }

    /**
     * @return LengthAwarePaginator
     */
    public function index(): LengthAwarePaginator
    {
        $name = request()->name;

        $email = request()->email;

        return $this->employeeModel->query()
            ->when($name, fn($query) => $query->where('first_name', $name)
                ->orWhere('last_name', $name))
            ->when($email, fn($query) => $query->where('email', $email))
            ->paginate();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id): mixed
    {
        return $this->employeeModel
            ->with('admin')->find($id);
    }

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed
    {
        return $this->employeeModel->create([
            'first_name' => $data->first_name,
            'last_name' => $data->last_name,
            'email' => $data->email,
            'phone' => $data->phone,
            'created_by' => auth()->id(),
            'started_at' => Carbon::parse($data->started_at),
            'is_intern' => boolval($data->started_at),
            'company_id' => $data->company_id
        ]);
    }

    /**
     * @param $data
     * @return mixed
     */
    public function update($data): mixed
    {
        $employee = $this->employeeModel->find($data->id);

        $employee->update([
            'first_name' => $data->first_name,
            'last_name' => $data->last_name,
            'email' => $data->email,
            'phone' => $data->phone,
            'company_id' => $data->company_id
        ]);

        return $employee;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed
    {
        $employee = $this->employeeModel->find($id);

        return $employee->delete();
    }
}
