<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function jsonArray($error_code,$message='请求成功',$data=[]){

        $array = [
            'error_code' => $error_code ,
            'message' => $message ,
            'data' => $data
        ] ;
        return $array ;
    }
}
