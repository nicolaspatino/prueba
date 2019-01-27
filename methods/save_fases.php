<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class save_fase{
    public static function run() {
        $obj = new self();
        $action = $_POST['action'];
        $res = null;
        switch ($action) {
            case 1:
                $res = $obj->save_fase_1();
                break;
            case 2:
                $res = $obj->save_fase_2();
                break;
            case 3:
                $res = $obj->save_fase_3();
                break;
            case 4:
                $res = $obj->save_fase_4();
                break;
            default:
                break;
        }
        echo $res;
    }
    private function conection_db() {
        $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");
        if (!$enlace) {
            echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
            echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
            echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }
        return $enlace;
    }
    private function query_db($fase) {
        $obj = new self();
        $enlace = $obj->conection_db();
        $res = array();
        $query = mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                        WHERE res.user_id = '.$_POST['user'].' AND res.fase_id = '.$fase);
        
        while ($row = mysqli_fetch_assoc($query)) {
            $res[] = $row;
        }
        return json_encode($res);
    }
    private function save_fase_1() {
        $obj = new self();
        $registro = (object)$_POST; 
        $enlace = $obj->conection_db();
        $data = json_decode($registro->data);
        
        foreach ($data as $key => $value) {
            $insert = mysqli_query($enlace,"insert into response_prueba (response_user, img, song, opt1, opt2, res_correc, time, letra, itm, cant, user_id, fase_id) values "
                        . "('$value->res_user', '$value->est', null, '$value->opt1', '$value->opt2' , '$value->res', '$value->time', '$registro->letra', '$value->itm', '$registro->inte', '$registro->user', 1)");
        }
        return $obj->query_db(1);
    }
    private function save_fase_2() {
        $obj = new self();
        $registro = (object)$_POST; 
        $enlace = $obj->conection_db();
        $data = json_decode($registro->data);
        foreach ($data as $key => $value) {
            $insert = mysqli_query($enlace,"insert into response_prueba (response_user, img, song, opt1, opt2, res_correc, time, letra, itm, cant, user_id, fase_id) values "
                        . "('$value->res_user', '$value->img', null, '$value->opt1', '$value->opt2' , '$value->res', '$value->time', '$registro->letra', '$value->itm', '$registro->inte','$registro->user', 2)");
        }
        return $obj->query_db(2);
    }
    private function save_fase_3() {
        $obj = new self();
        $registro = (object)$_POST; 
        $enlace = $obj->conection_db();
        $data = json_decode($registro->data);
        foreach ($data as $key => $value) {
            $insert = mysqli_query($enlace,"insert into response_prueba (response_user, img, song, opt1, opt2, res_correc, letra, itm, cant, time, user_id, fase_id) values "
                        . "('$value->res_user', '$value->img', '$value->son', '$value->opt1', '$value->opt2' , '$value->res','$registro->letra', '$value->itm', '$registro->inte',  '$value->time','$registro->user', 3)");
        }
        return $obj->query_db(3);
    }
    private function save_fase_4() {
        $obj = new self();
        $registro = (object)$_POST; 
        $enlace = $obj->conection_db();
        $data = json_decode($registro->data);
        foreach ($data as $key => $value) {
            $insert = mysqli_query($enlace,"insert into response_prueba (response_user, img, song, opt1, opt2, res_correc, letra, itm, cant, time, user_id, fase_id) values "
                        . "('$value->res_user', '$value->img', '$value->son', '$value->opt1', '$value->opt2' , '$value->res', '$registro->letra', '$value->itm', '$registro->inte','$value->time', '$registro->user', 4)");
        }
        return $obj->query_db(4);
    }
}
save_fase::run();