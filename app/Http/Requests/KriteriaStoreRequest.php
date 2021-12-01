<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KriteriaStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'kriteria_kode' => 'required|unique:kriteria_m,kriteria_kode',
            'kriteria_keterangan' => 'required|min:3',
            'kriteria_jenis' => 'required|in:BENEFIT,COST'
        ];
    }
}
