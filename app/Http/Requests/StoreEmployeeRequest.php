<?php

namespace App\Http\Requests;

use App\Traits\ApiResponse;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreEmployeeRequest extends FormRequest
{
    use ApiResponse;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|regex:/(^[a-zA-Z ]*$)/',
            'last_name' => 'required|regex:/(^[a-zA-Z ]*$)/',
            'email' => 'email:rfc,dns|required|unique:employees,email',
            'phone' => 'required',
            'started_at' => 'required|date',
            'company_id' => 'required|exists:companies,id',
        ];
    }

    /**
     * @param Validator $validator
     * @return void
     */
    protected function failedValidation(Validator $validator): void
    {
        $this->apiResponseValidation($validator);
    }
}
