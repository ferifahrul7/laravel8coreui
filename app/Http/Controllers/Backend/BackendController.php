<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;

class BackendController extends Controller
{
    protected $limit = 10;

    function __construct()
    {
        $this->middleware('auth:web');
    }

    protected function notification($level, $title, $message)
    {
        return  Session::flash('flash_notification', [
            'title'   => $title,
            'level'   => $level,
            'message' => $message
        ]);
    }

    protected function deleteImage($filename, $path,$withThumb = false)
    {
        $file = $path . DIRECTORY_SEPARATOR . $filename;
        $thumb = $path . DIRECTORY_SEPARATOR . 'thumb_' .$filename;

        $deleteFile = File::delete($file);
        if($withThumb){
           $deleteThumb = File::delete($thumb);
        }
        return $deleteFile;
    }
}
