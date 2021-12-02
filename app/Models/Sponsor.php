<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sponsor extends Model
{
    use HasFactory,SoftDeletes;

    protected $table      = 'sponsors';
    protected $primaryKey = 'id';

    protected $fillable   = [
        'name', 'description', 'image', 'is_active',
        'deleted_at', 'deleted_by',
        'user_id'
    ];

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    protected $appends = ['image_path','thumb','thumb_image_path','is_active_badge'];

    // relation
    // user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // deleted oleh siapa
    public function delete_history()
    {
        return $this->belongsTo(User::class, 'deleted_by');
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

    public function getImagePathAttribute()
    {
        return  asset('storage/upload/sponsor/' . $this->attributes['image']);
    }

    public function getThumbImagePathAttribute()
    {
        return  asset('storage/upload/sponsor/thumb_' . $this->attributes['image']);
    }

    public function getThumbAttribute()
    {
        return 'thumb_' . $this->attributes['image'];
    }
    
    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }
}

