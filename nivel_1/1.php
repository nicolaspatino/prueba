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
    
    echo "<link  rel='stylesheet' type='text/css' href='../style.css'>";
    
    
    $idUser = $_POST['idUser']; 
    $correctas = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM response res WHERE res.nivel_id ="1" AND res.user_id = '.$idUser));
    if($correctas){
            $correctas = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM user res WHERE  res.id = '.$idUser));

        echo '<h1>'.$correctas['name'].', ya realizaste la prueba</h1>'
                . '<form method=post ACTION="../index.php" id="formu">
                        <input name="siguiente" type="submit" value="Nuevo registro" class="enviar"/>
                    </form>';
    }else{
        $animal = 'leon_r';  
        $sonido = 'gallo';
        $porciones = explode("_", $animal);
        $name_imag = $porciones[0];
        $item_1 = explode("/", $_SERVER['PHP_SELF']);
        $item = explode(".php", $item_1[3]);
        $archivo = $item[0]+1;
        echo "<img src='../pix/Imagenes/$animal.png'> ".
             "<audio  src='../pix/Sonidos/$sonido.wav' type='audio/mpeg'  autoplay loop>
                Su navegador no soporta
             </audio>";
        echo '<form method=post ACTION="'.$archivo.'.php" id="formu">
                <input name="idUser"     type="hidden" value="'.$idUser.'"/>
                <input name="nivel"      type="hidden" value="1"/>
                <input name="num_item"   type="hidden" value='.$item[0].'/>
                <input name="name_img"   type="hidden" value="'.$animal.'"/>
                <input name="name_song"  type="hidden" value="'.$sonido.'"/>
                <input name="no_supo"    type="button" value="no_supo"        id="no_supo"/>
                <input name="correcto"   type="button" value="'.$name_imag.'" id="id_imagen">
                <input name="incorrecto" type="button" value="'.$sonido.'"    id="id_sonido">
            </form>
            <script type="text/javascript" src="../script.js"></script>';
    }

?>
