<?php

namespace App\Repositories\Contracts\Admin;

interface CompanyInterface
{
    /**
     * @return mixed
     */
    public function index(): mixed;

    /**
     * @return mixed
     */
    public function indexName(): mixed;

    /**
     * @param $id
     * @return mixed
     */
    public function show($id): mixed;

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed;

    /**
     * @param $data
     * @return mixed
     */
    public function update($data): mixed;

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed;

}
