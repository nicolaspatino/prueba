<html>
    <head>
        <link  rel="stylesheet" type="text/css" href="css/style.css">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
    </head>
    <body id="resumen_fase_1">
    

    <?php
        $nombre = $_POST['nombre'];
        $edad = $_POST['edad'];
        $prueba = $_POST['prueba'];
        session_start();
        if (!isset($_SESSION['prueba'])) {
          $_SESSION['prueba'] = $prueba;
        }
        
        
        $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");

        if (!$enlace) {
            echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
            echo "error de depuración: " . mysqli_connect_errno() . PHP_EOL;
            exit;
        }
        $sql       = 'SELECT * FROM user WHERE name = "'.$nombre.'" AND edad = '.$edad;
        $resultado = mysqli_query($enlace,$sql);
        //if(array_key_exists("nombre",$_POST) && $_POST['nombre']){
        $query = mysqli_fetch_assoc($resultado);
            if(!is_array($query)){
                $insert = mysqli_query($enlace,"INSERT INTO user (name,edad) values ('$nombre', '$edad')");

                echo 'A INGRESADO CORRECTAMENTE LOS SIGUENTES DATOS<BR>';
                echo "Nombre: $nombre" ;
                echo "<br> La edad: $edad <br>";
                //$query = mysqli_fetch_assoc(mysqli_query($enlace,"select * from user where name = '$nombre' AND edad = '$edad' AND carrera = '$carrera' "));
                $enlace->query($insert);
                
                $idUser = $enlace->insert_id;
                
            }else{
                $idUser = $query['id'];
                echo "<h2>$nombre, ya te registraste </h2>";
            }
            if (!isset($_SESSION['idUser'])) {
                $_SESSION['idUser'] = $idUser;
            }
            echo '<style>'
                    . '#resumen_fase_1{
                            background-image:url(pix/Imagenes/fase_1.png);
                            height: 100%;
                            position: absolute;
                            width: 100%;
                            background-size: 100% 80%;
                            background-repeat: no-repeat;
                        }
                        .button_ir{
                            position: fixed;
                            bottom: 5%;
                            left: 10%;
                        }
                    </style>
                    <button type="button" class="button_ir" onclick="updateReloj()">Ir a la fase 1</button>';
            
            echo '<div id="CuentaAtras"></div>';
            mysqli_close($enlace);
            
        //}

    ?>
    <script>
        console.log('$idUser',"<?php echo $idUser; ?> ");
        var totalTiempo = 5;
        function updateReloj(){
            var div = document.getElementById('CuentaAtras');
            div.style.display = 'block';
            if(totalTiempo==0){
                div.innerHTML = '<h3>VAMOS</h3>';
                <?php
                if($prueba == 1){?>
                    window.location =  './fase_1/fase_1.php?id_user='+<?php echo $idUser; ?>;
                <?php                
                }else{?>
                    window.location =  './to_img/fase_1/fase_1.php?id_user='+<?php echo $idUser; ?>;
                <?php                
                }
                ?>
                
            }else{
                
                div.innerHTML = '<div class="segundos_'+totalTiempo+'">'+ totalTiempo+'</div>';
                /* Restamos un segundo al tiempo restante */
                totalTiempo-=1;
                /* Ejecutamos nuevamente la función al pasar 1000 milisegundos (1 segundo) */
                setTimeout("updateReloj()",1000);
            }
        }
    </script>
    
</body>
</html>
	