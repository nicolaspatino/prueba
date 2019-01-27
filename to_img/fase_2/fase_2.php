<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Fase 2</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../style.css"/>
        <script src="../cuenta_regre.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <?php
        $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");
        $correctas = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                                                WHERE res.user_id = '.$_GET['id_user'].' AND res.fase_id = 2  AND res.letra =  0'));
        if($correctas){
            echo '<h2 class="container" id="resumen_fase_2"> Ya realizó la fase 2 de entrenamiento</h2>.'
                . '<button type="button" class="button_ir" onclick="updateReloj('.$_GET['id_user'].',3)">Ir a la fase 3</button>'
                    . '<style>'
                    . '#resumen_fase_2{
                            background-image:url(../../pix/Imagenes/fase_3.png);
                            height: 100%;
                            position: absolute;
                        }
                    </style>';
        }else{
            ?><div class="container" id="resumen_fase_2">
                <ul class="nav nav-tabs">
                    <li class="active"><a id="tab_0" data-toggle="tab" href="#menu0">0</a></li>
                    <li><a id="tab_1" data-toggle="tab" href="#menu1">1</a></li>
                    <li><a id="tab_2" data-toggle="tab" href="#menu2">2</a></li>
                    <li><a id="tab_3" data-toggle="tab" href="#menu3">3</a></li>
                    <li><a id="tab_4" data-toggle="tab" href="#menu4">4</a></li>
                    <li><a id="tab_5" data-toggle="tab" href="#menu5">5</a></li>
                    <li><a id="tab_6" data-toggle="tab" href="#menu6">6</a></li>
                    <li><a id="tab_7" data-toggle="tab" href="#menu7">7</a></li>
                    <li><a id="tab_8" data-toggle="tab" href="#menu8">8</a></li>
                    <li><a id="tab_9" data-toggle="tab" href="#menu9">9</a></li>
                    <li><a id="tab_10" data-toggle="tab" href="#menu10">10</a></li>
                    <li><a id="tab_11" data-toggle="tab" href="#menu11">11</a></li>
                    <li><a id="tab_12" data-toggle="tab" href="#menu12">12</a></li>
                    <li><a id="tab_13" data-toggle="tab" href="#menu13">13</a></li>
                    <li><a id="tab_14" data-toggle="tab" href="#menu14">14</a></li>
                    <li><a id="tab_15" data-toggle="tab" href="#menu15">15</a></li>
                    <li><a id="tab_16" data-toggle="tab" href="#menu16">16</a></li>
                    <li><a id="tab_17" data-toggle="tab" href="#menu17">17</a></li>
                </ul>
                <div id="new_inten"></div>
                <div class="tab-content">
                    <div id="menu0" class="tab-pane fade in active">
                        <img id="menu0_color" src=''/>
                        <button id="menu0_opt1" type="button" class="button" onclick="rf2.onclik_respose(0,1)"><img id="img_btn_0_1" src=''/></button>
                        <button id="menu0_opt2" type="button" class="button" onclick="rf2.onclik_respose(0,2)"><img id="img_btn_0_2" src=''/></button>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <img id="menu1_color" src=''/>
                        <button id="menu1_opt1" type="button" class="button" onclick="rf2.onclik_respose(1,1)"><img id="img_btn_1_1" src=''/></button>
                        <button id="menu1_opt2" type="button" class="button" onclick="rf2.onclik_respose(1,2)"><img id="img_btn_1_2" src=''/></button>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <img id="menu2_color" src=''/>
                        <button id="menu2_opt1" type="button" class="button" onclick="rf2.onclik_respose(2,1)"><img id="img_btn_2_1" src=''/></button>
                        <button id="menu2_opt2" type="button" class="button" onclick="rf2.onclik_respose(2,2)"><img id="img_btn_2_2" src=''/></button>
                    </div>
                    <div id="menu3" class="tab-pane fade">
                        <img id="menu3_color" src=''/>
                        <button id="menu3_opt1" type="button" class="button"  onclick="rf2.onclik_respose(3,1)"><img id="img_btn_3_1" src=''/></button>
                        <button id="menu3_opt2" type="button" class="button"  onclick="rf2.onclik_respose(3,2)"><img id="img_btn_3_2" src=''/></button>
                    </div>
                    <div id="menu4" class="tab-pane fade">
                        <img id="menu4_color" src=''/>
                        <button id="menu4_opt1" type="button" class="button" onclick="rf2.onclik_respose(4,1)"><img id="img_btn_4_1" src=''/></button>
                        <button id="menu4_opt2" type="button" class="button" onclick="rf2.onclik_respose(4,2)"><img id="img_btn_4_2" src=''/></button>
                    </div>
                    <div id="menu5" class="tab-pane fade">
                        <img id="menu5_color" src=''/>
                        <button id="menu5_opt1" type="button" class="button" onclick="rf2.onclik_respose(5,1)"><img id="img_btn_5_1" src=''/></button>
                        <button id="menu5_opt2" type="button" class="button" onclick="rf2.onclik_respose(5,2)"><img id="img_btn_5_2" src=''/></button>
                    </div>
                    <div id="menu6" class="tab-pane fade">
                        <img id="menu6_color" src=''/>
                        <button id="menu6_opt1" type="button" class="button" onclick="rf2.onclik_respose(6,1)"><img id="img_btn_6_1" src=''/></button>
                        <button id="menu6_opt2" type="button" class="button" onclick="rf2.onclik_respose(6,2)"><img id="img_btn_6_2" src=''/></button>
                    </div>
                    <div id="menu7" class="tab-pane fade">
                        <img id="menu7_color" src=''/>
                        <button id="menu7_opt1" type="button" class="button" onclick="rf2.onclik_respose(7,1)"><img id="img_btn_7_1" src=''/></button>
                        <button id="menu7_opt2" type="button" class="button" onclick="rf2.onclik_respose(7,2)"><img id="img_btn_7_2" src=''/></button>
                    </div>
                    <div id="menu8" class="tab-pane fade">
                        <img id="menu8_color" src=''/>
                        <button id="menu8_opt1" type="button" class="button" onclick="rf2.onclik_respose(8,1)"><img id="img_btn_8_1" src=''/></button>
                        <button id="menu8_opt2" type="button" class="button" onclick="rf2.onclik_respose(8,2)"><img id="img_btn_8_2" src=''/></button>
                    </div>
                    <div id="menu9" class="tab-pane fade">
                        <img id="menu9_color" src=''/>
                        <button id="menu9_opt1" type="button" class="button" onclick="rf2.onclik_respose(9,1)"><img id="img_btn_9_1" src=''/></button>
                        <button id="menu9_opt2" type="button" class="button" onclick="rf2.onclik_respose(9,2)"><img id="img_btn_9_2" src=''/></button>
                    </div>
                    <div id="menu10" class="tab-pane fade">
                        <img id="menu10_color" src=''/>
                        <button id="menu10_opt1" type="button" class="button" onclick="rf2.onclik_respose(10,1)"><img id="img_btn_10_1" src=''/></button>
                        <button id="menu10_opt2" type="button" class="button" onclick="rf2.onclik_respose(10,2)"><img id="img_btn_10_2" src=''/></button>
                    </div>
                    <div id="menu11" class="tab-pane fade">
                        <img id="menu11_color" src=''/>
                        <button id="menu11_opt1" type="button" class="button"  onclick="rf2.onclik_respose(11,1)"><img id="img_btn_11_1" src=''/></button>
                        <button id="menu11_opt2" type="button" class="button"  onclick="rf2.onclik_respose(11,2)"><img id="img_btn_11_2" src=''/></button>
                    </div>
                    <div id="menu12" class="tab-pane fade">
                        <img id="menu12_color" src=''/>
                        <button id="menu12_opt1" type="button" class="button" onclick="rf2.onclik_respose(12,1)"><img id="img_btn_12_1" src=''/></button>
                        <button id="menu12_opt2" type="button" class="button" onclick="rf2.onclik_respose(12,2)"><img id="img_btn_12_2" src=''/></button>
                    </div>
                    <div id="menu13" class="tab-pane fade">
                        <img id="menu13_color" src=''/>
                        <button id="menu13_opt1" type="button" class="button" onclick="rf2.onclik_respose(13,1)"><img id="img_btn_13_1" src=''/></button>
                        <button id="menu13_opt2" type="button" class="button" onclick="rf2.onclik_respose(13,2)"><img id="img_btn_13_2" src=''/></button>
                    </div>
                    <div id="menu14" class="tab-pane fade">
                        <img id="menu14_color" src=''/>
                        <button id="menu14_opt1" type="button" class="button" onclick="rf2.onclik_respose(14,1)"><img id="img_btn_14_1" src=''/></button>
                        <button id="menu14_opt2" type="button" class="button" onclick="rf2.onclik_respose(14,2)"><img id="img_btn_14_2" src=''/></button>
                    </div>
                    <div id="menu15" class="tab-pane fade">
                        <img id="menu15_color" src=''/>
                        <button id="menu15_opt1" type="button" class="button" onclick="rf2.onclik_respose(15,1)"><img id="img_btn_15_1" src=''/></button>
                        <button id="menu15_opt2" type="button" class="button" onclick="rf2.onclik_respose(15,2)"><img id="img_btn_15_2" src=''/></button>
                    </div>
                    <div id="menu16" class="tab-pane fade">
                        <img id="menu16_color" src=''/>
                        <button id="menu16_opt1" type="button" class="button" onclick="rf2.onclik_respose(16,1)"><img id="img_btn_16_1" src=''/></button>
                        <button id="menu16_opt2" type="button" class="button" onclick="rf2.onclik_respose(16,2)"><img id="img_btn_16_2" src=''/></button>
                    </div>
                    <div id="menu17" class="tab-pane fade">
                        <img id="menu17_color" src=''/>
                        <button id="menu17_opt1" type="button" class="button" onclick="rf2.onclik_respose(17,1)"><img id="img_btn_17_1" src=''/></button>
                        <button id="menu17_opt2" type="button" class="button" onclick="rf2.onclik_respose(17,2)"><img id="img_btn_17_2" src=''/></button>
                    </div>
                </div>
            </div>
            <script src="random_fase_2.js"></script>
        <?php
        }
        ?>
        <h2 id="instruccion"></h2>
        <div id="CuentaAtras"></div>    
    </body>
</html>
