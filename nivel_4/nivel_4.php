<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Nivel 4</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <script src="../cuenta_regre.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <?php
        $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");
        $correctas = mysqli_fetch_assoc(mysqli_query($enlace,'SELECT * FROM response res 
                                                                WHERE res.user_id = '.$_GET['id_user'].' AND res.nivel_id = 4  AND res.letra = 1'));
        if($correctas){
            echo '<h2 class="container" id="resumen_nivel_4"> Ya realizó el nivel 4</h2>
                  <button type="button" class="button_ir" onclick="location.href = \'resumen_all_levels.php?id_user='.$_GET['id_user'].'\'">Continuar</button>'
                    . '<style>'
                    . '#resumen_nivel_4{
                            background-image:url(../pix/Imagenes/nivel_1.png);
                            height: 100%;
                            position: absolute;
                            background-size: 65%;
                            background-repeat: no-repeat;
                            background-position: top;
                        }
                  </style>';
                //. '<button type="button" class="button_ir" onclick="updateReloj_nivel('.$_GET['id_user'].',2)">Ir al Nivel 2</button>';
        }else{
            ?><div class="container" id="resumen_nivel_4">
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

                <div class="tab-content">
                    <div id="menu0" class="tab-pane fade in active">
                        <img id="menu0_color" src=''/>
                        <audio id="menu0_audio" src='' type='audio/mpeg'  autoplay loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu0_opt1" type="button" class="button" onclick="rn4.onclik_respose(0,1)"></button>
                        <button id="menu0_opt2" type="button" class="button" onclick="rn4.onclik_respose(0,2)"></button>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <img id="menu1_color" src=''/>
                        <audio id="menu1_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu1_opt1" type="button" class="button" onclick="rn4.onclik_respose(1,1)"></button>
                        <button id="menu1_opt2" type="button" class="button" onclick="rn4.onclik_respose(1,2)"></button>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <img id="menu2_color" src=''/>
                        <audio id="menu2_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu2_opt1" type="button" class="button" onclick="rn4.onclik_respose(2,1)"></button>
                        <button id="menu2_opt2" type="button" class="button" onclick="rn4.onclik_respose(2,2)"></button>
                    </div>
                    <div id="menu3" class="tab-pane fade">
                        <img id="menu3_color" src=''/>
                        <audio id="menu3_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu3_opt1" type="button" class="button"  onclick="rn4.onclik_respose(3,1)"></button>
                        <button id="menu3_opt2" type="button" class="button"  onclick="rn4.onclik_respose(3,2)"></button>
                    </div>
                    <div id="menu4" class="tab-pane fade">
                        <img id="menu4_color" src=''/>
                        <audio id="menu4_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu4_opt1" type="button" class="button" onclick="rn4.onclik_respose(4,1)"></button>
                        <button id="menu4_opt2" type="button" class="button" onclick="rn4.onclik_respose(4,2)"></button>
                    </div>
                    <div id="menu5" class="tab-pane fade">
                        <img id="menu5_color" src=''/>
                        <audio id="menu5_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu5_opt1" type="button" class="button" onclick="rn4.onclik_respose(5,1)"></button>
                        <button id="menu5_opt2" type="button" class="button" onclick="rn4.onclik_respose(5,2)"></button>
                    </div>
                    <div id="menu6" class="tab-pane fade">
                        <img id="menu6_color" src=''/>
                        <audio id="menu6_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu6_opt1" type="button" class="button" onclick="rn4.onclik_respose(6,1)"></button>
                        <button id="menu6_opt2" type="button" class="button" onclick="rn4.onclik_respose(6,2)"></button>
                    </div>
                    <div id="menu7" class="tab-pane fade">
                        <img id="menu7_color" src=''/>
                        <audio id="menu7_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu7_opt1" type="button" class="button" onclick="rn4.onclik_respose(7,1)"></button>
                        <button id="menu7_opt2" type="button" class="button" onclick="rn4.onclik_respose(7,2)"></button>
                    </div>
                    <div id="menu8" class="tab-pane fade">
                        <img id="menu8_color" src=''/>
                        <audio id="menu8_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu8_opt1" type="button" class="button" onclick="rn4.onclik_respose(8,1)"></button>
                        <button id="menu8_opt2" type="button" class="button" onclick="rn4.onclik_respose(8,2)"></button>
                    </div>
                    <div id="menu9" class="tab-pane fade">
                        <img id="menu9_color" src=''/>
                        <audio id="menu9_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu9_opt1" type="button" class="button" onclick="rn4.onclik_respose(9,1)"></button>
                        <button id="menu9_opt2" type="button" class="button" onclick="rn4.onclik_respose(9,2)"></button>
                    </div>
                    <div id="menu10" class="tab-pane fade">
                        <img id="menu10_color" src=''/>
                        <audio id="menu10_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu10_opt1" type="button" class="button" onclick="rn4.onclik_respose(10,1)"></button>
                        <button id="menu10_opt2" type="button" class="button" onclick="rn4.onclik_respose(10,2)"></button>
                    </div>
                    <div id="menu11" class="tab-pane fade">
                        <img id="menu11_color" src=''/>
                        <audio id="menu11_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu11_opt1" type="button" class="button" onclick="rn4.onclik_respose(11,1)"></button>
                        <button id="menu11_opt2" type="button" class="button" onclick="rn4.onclik_respose(11,2)"></button>
                    </div>
                    <div id="menu12" class="tab-pane fade">
                        <img id="menu12_color" src=''/>
                        <audio id="menu12_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu12_opt1" type="button" class="button" onclick="rn4.onclik_respose(12,1)"></button>
                        <button id="menu12_opt2" type="button" class="button" onclick="rn4.onclik_respose(12,2)"></button>
                    </div>
                    <div id="menu13" class="tab-pane fade">
                        <img id="menu13_color" src=''/>
                        <audio id="menu13_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu13_opt1" type="button" class="button"  onclick="rn4.onclik_respose(13,1)"></button>
                        <button id="menu13_opt2" type="button" class="button"  onclick="rn4.onclik_respose(13,2)"></button>
                    </div>
                    <div id="menu14" class="tab-pane fade">
                        <img id="menu14_color" src=''/>
                        <audio id="menu14_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu14_opt1" type="button" class="button" onclick="rn4.onclik_respose(14,1)"></button>
                        <button id="menu14_opt2" type="button" class="button" onclick="rn4.onclik_respose(14,2)"></button>
                    </div>
                    <div id="menu15" class="tab-pane fade">
                        <img id="menu15_color" src=''/>
                        <audio id="menu15_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu15_opt1" type="button" class="button" onclick="rn4.onclik_respose(15,1)"></button>
                        <button id="menu15_opt2" type="button" class="button" onclick="rn4.onclik_respose(15,2)"></button>
                    </div>
                    <div id="menu16" class="tab-pane fade">
                        <img id="menu16_color" src=''/>
                        <audio id="menu16_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu16_opt1" type="button" class="button" onclick="rn4.onclik_respose(16,1)"></button>
                        <button id="menu16_opt2" type="button" class="button" onclick="rn4.onclik_respose(16,2)"></button>
                    </div>
                    <div id="menu17" class="tab-pane fade">
                        <img id="menu17_color" src=''/>
                        <audio id="menu17_audio" src='' type='audio/mpeg' loop>
                            Su navegador no soporta
                        </audio>
                        <button id="menu17_opt1" type="button" class="button" onclick="rn4.onclik_respose(17,1)"></button>
                        <button id="menu17_opt2" type="button" class="button" onclick="rn4.onclik_respose(17,2)"></button>
                    </div>
                </div>
            </div>
            <script src="random_nivel_4.js"></script>
        <?php
        }
        ?>
        <h2 id="instruccion"></h2>
        <div id="CuentaAtras"></div>    
    </body>
</html>
