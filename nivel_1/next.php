<html>
    <head>
        <link  rel="stylesheet" type="text/css" href="../style.css">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
    </head>
<body>
<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

        $resultado = mysqli_query($enlace,'SELECT * FROM user WHERE id = '.$idUser);
        $query = mysqli_fetch_assoc($resultado);

        $correctas = mysqli_query($enlace,'SELECT * FROM response res WHERE res.nivel_id ="1" AND res.user_id = '.$idUser);
        //$cor = mysqli_fetch_array($correctas);
        $correcto = 0;
        $incorrecto = 0;
        $no_supo = 0;
        while ($row = mysqli_fetch_assoc($correctas)) {
            if($row['response'] == 'correcto'){
                $correcto += 1;
            }else if($row['response'] == 'incorrecto'){
                $incorrecto += 1;
            }else if($row['response'] == 'no_supo'){
                $no_supo += 1;
            }

        }

       echo '<h3>'.$query['name'].' has optenido: </h3>';
       echo '<ul>'
       . '<li>'.$correcto.' respuestas correctas</li>'
       . '<li>'.$incorrecto.' respuestas incorrectas</li>'
       . '<li>'.$no_supo.' respuestas sin contestar</li>';

        mysqli_close($enlace);    

        echo '<form method=post ACTION="../nivel_2/1.php" id="formu">
                <input name="idUser"     type="hidden" value="'.$idUser.'"/>
                <input name="nivel"      type="hidden" value="2"/>

                <input name="siguiente" type="submit" value="Sigiente Nivel" class="enviar"/>

            </form>';
    }
    ?>
<link  rel="stylesheet" type="text/css" href="../style.css">    
</body>
</html>
