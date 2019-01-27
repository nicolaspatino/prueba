<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include '../util/conection.php';

    $animal = 'caballo_a';  
    $sonido = 'elefante'; 
    $porciones = explode("_", $animal);
    $name_imag = $porciones[0];
    $item_1 = explode("/", $_SERVER['PHP_SELF']);
    $item = explode(".php", $item_1[3]);
    $archivo = $item[0]+1;
    echo "<img src='../pix/Imagenes/$animal.png'> ".
         "<audio  src='../pix/Sonidos/$sonido.wav' type='audio/mpeg'  autoplay loop>
            Su navegador no soporta
         </audio>";
    echo '<form method=post ACTION="next.php" id="formu">
            <input name="idUser"     type="hidden" value="'.$idUser.'"/>
            <input name="nivel"      type="hidden" value="1"/>
            <input name="num_item"   type="hidden" value='.$item[0].'/>
            <input name="name_img"   type="hidden" value="'.$animal.'"/>
            <input name="name_song"  type="hidden" value="'.$sonido.'"/>
            <input name="no_supo"    type="button" value="no_supo"        id="no_supo"/>
            <input name="incorrecto" type="button" value="'.$name_imag.'" id="id_imagen">
            <input name="correcto"   type="button" value="'.$sonido.'"    id="id_sonido">
        </form>
        <script type="text/javascript" src="../script.js"></script>';