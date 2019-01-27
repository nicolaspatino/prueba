<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <link rel='stylesheet' type='text/css' href='../style.css'>
    </head>
<body>
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//print_r($_POST);
    $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");

    if (!$enlace) {
        echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
        echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
        echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }
    $idUser = $_POST['idUser'];
    $time = $_POST['time'];
    $name_img = $_POST['name_img'];
    $name_song = $_POST['name_song'];
    $nivel = $_POST['nivel'];
    $item = (int)$_POST['num_item'];
    $correctas = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM response res WHERE res.num_item = '.$item.' AND res.nivel_id ="'.$nivel.'" AND res.user_id = '.$idUser));
    if($correctas){
        $users = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM user res WHERE  res.id = '.$idUser));

        echo '<h1>'.$users['name'].', ya realizaste la prueba</h1>'
                . '<form method=post ACTION="../index.php" id="formu">
                        <input name="siguiente" type="submit" value="Nuevo registro" class="enviar"/>
                    </form>';
        exit;
    }else{
        $i = 0;
        foreach ($_POST as $key => $value) {
            if($i == 5){
                $response = $key;
            }
            $i += 1;
        }
        $insert = mysqli_query($enlace,"insert into response (response, time, name_img, name_song, num_item, user_id, nivel_id) values "
                        . "('$response', '$time', '$name_img', '$name_song', '$item' , '$idUser', '$nivel')");

    }
    mysqli_close($enlace);
