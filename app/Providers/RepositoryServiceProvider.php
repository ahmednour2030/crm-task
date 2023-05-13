<?php

namespace App\Providers;

use App\Repositories\Contracts\Admin\CompanyInterface;
use App\Repositories\Contracts\Admin\EmployeeInterface;
use App\Repositories\Eloquents\Admin\CompanyRepository;
use App\Repositories\Eloquents\Admin\EmployeeRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(CompanyInterface::class, CompanyRepository::class);
        $this->app->bind(EmployeeInterface::class, EmployeeRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
