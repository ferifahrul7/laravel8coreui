<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutDetail extends Model
{
    use HasFactory;

    
    protected $table      = 'about_details';
    protected $primaryKey = 'id';
    protected $fillable   = [
         'description', 'icon', 'is_active',
    ];
    protected $dates = [
        'created_at',
        'updated_at'
    ];
    // relation
    public function about()
    {
        return $this->belongsTo(About::class,'about_id');
    }

    // setter
    public function getIsActiveBadgeAttribute()
    {
        $status = $this->attributes['is_active'];
        switch ($status) {
            case 0:
                $badge = '<span class="badge badge-secondary">Nonaktif</span>';
                break;
            case 1:
                $badge = '<span class="badge badge-primary">Aktif</span>';
                break;
            default:
                $badge = '<span class="badge badge-danger">Tidak Diketahui</span>';
                break;
        }
        return $badge;
    }
    
    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }


}
