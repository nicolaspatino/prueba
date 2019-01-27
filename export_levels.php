<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Todos los Registros</title>
    </head>
    <body>
        <?php
        /* 
            Created on : 25/04/2018, 07:41:58 PM
            Author     : Daniela Sierra
         *  https://datatables.net/examples/api/multi_filter.html
        */
            $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");

            if (!$enlace) {
                echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
                echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
                echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
                exit;
            }
            $nombre = $_POST['user'];
            $pass = $_POST['pass'];
            $admin = mysqli_query($enlace, 'SELECT * FROM admin WHERE user = "' . $nombre . '" AND pass = "' . $pass . '"');
            if($admin){
                $sql = 'SELECT * FROM user us LEFT JOIN response res ON us.id = res.user_id';
                $resultado = mysqli_query($enlace,$sql);
                //echo ' <input class="form-control" id="myInput" type="text" placeholder="Search..">';
                    #example
                $filename = "data_Tabla_img.xlsx";

                header("Content-Type: application/vnd.ms-excel");

                header("Content-Disposition: attachment; filename=".$filename);
                echo '<div id="example_wrapper" class="dataTables_wrapper">
                       <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Itm</th>
                                    <th>Img</th>
                                    <th>Song</th>
                                    <th>Opt1</th>
                                    <th>Opt2</th>
                                    <th>Res Correcta</th>
                                    <th>Res User</th>
                                    <th>Tiempo</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody id="myTable2">';
                                    while ($fila = mysqli_fetch_assoc($resultado2)) {
                                        echo '<tr>';
                                        echo '<td>' . $fila["name"] . '</td>';
                                        echo '<td>' . $fila["edad"] . '</td>';
                                        echo '<td>' . $fila["itm"] . '</td>';
                                        echo '<td>' . $fila["img"] . '</td>';
                                        echo '<td>' . $fila["song"] . '</td>';
                                        echo '<td>' . $fila["opt1"] . '</td>';
                                        echo '<td>' . $fila["opt2"] . '</td>';
                                        echo '<td>' . $fila["res_correc"] . '</td>';
                                        echo '<td>' . $fila["response_user"] . '</td>';
                                        echo '<td>' . $fila["time"] . '</td>';
                                        echo '<td>Nivel_' . $fila["nivel_id"] . '</td>';
                                        echo '</tr>';
                                    }
                       echo '</tbody>
                        </table>';

                 echo '</div>';
            }else{
                echo 'no puede acceder a esta info......';
            }
                

            mysqli_close($enlace);
        ?>


    </body>
</html>
