<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'services';
    protected $appends = ['type_icon_logo','is_active_badge','icon_logo'];
    protected $fillable = ['title', 'description', 'type_icon', 'icon', 'is_active', 'deleted_at', 'deleted_by', 'user_id', 'created_at', 'updated_at'];

    public function getTypeIconLogoAttribute()
    {
        switch ($this->attributes['type_icon']) {
            case 'coreui':
                $result = '<img src="' . asset('assets/brand/coreui-signet-white.svg') . '" width="118" height="46" alt="CoreUI Logo">';
                break;
            default:
                $result = null;
                break;
        }
        return $result;
    }

    public function getIconLogoAttribute()
    {
        switch ($this->attributes['type_icon']) {
            case 'coreui':
                $result = '<i class="c-icon '.$this->attributes['icon'].'"></i>';
                break;
            default:
                $result = null;
                break;
        }
        return $result;
    }

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
}
