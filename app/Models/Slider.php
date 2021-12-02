<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slider extends Model
{
    use HasFactory,SoftDeletes;

    protected $table      = 'sliders';
    protected $primaryKey = 'id';
    protected $fillable   = [
        'title', 'description', 'image', 'is_active',
        'started_at', 'ended_at', 'deleted_at', 'deleted_by',
        'user_id'
    ];
    protected $dates = [
        'started_at',
        'ended_at',
        'started_at_8601',
        'ended_at_8601',
        'deleted_at',
        'created_at',
        'updated_at'
    ];
    protected $appends = ['image_path','thumb','thumb_image_path','is_active_badge','started_at8601','ended_at8601'];
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

    public function getStartedAt8601Attribute()
    {
        if (!empty($this->attributes['started_at'])) return Carbon::parse($this->attributes['started_at'])->toIso8601String();
    }

    public function getEndedAt8601Attribute()
    {
        if (!empty($this->attributes['ended_at']))  return Carbon::parse($this->attributes['ended_at'])->toIso8601String();
    }

    public function getStartedAtAttribute()
    {
        if (!empty($this->attributes['started_at'])) return Carbon::parse($this->attributes['started_at'])->format('Y-m-d H:i:s');
    }

    public function getEndedAtAttribute()
    {
        if (!empty($this->attributes['ended_at']))  return Carbon::parse($this->attributes['ended_at'])->format('Y-m-d H:i:s');
    }

    public function setEndedAtAttribute($value)
    {
        if (!empty($value)) return $this->attributes['ended_at'] = Carbon::parse($value)->format('Y-m-d h:i:s');
    }

    public function setStartedAtAttribute($value)
    {
        if (!empty($value)) return $this->attributes['started_at'] = Carbon::parse($value)->format('Y-m-d h:i:s');
    }

    public function getImagePathAttribute()
    {
        return  asset('storage/upload/slider/' . $this->attributes['image']);
    }

    public function getThumbImagePathAttribute()
    {
        return  asset('storage/upload/slider/thumb_' . $this->attributes['image']);
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
