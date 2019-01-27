<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <link  rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <title></title>
    </head>
    <body>
        <?php
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
        if ($nombre && $admin) {
            $resultado1 = mysqli_query($enlace, 'SELECT res.*, us.name, us.edad FROM USER us 
                                                LEFT JOIN response_prueba res ON us.id = res.user_id');
            $resultado2 = mysqli_query($enlace, 'SELECT res.*, us.name, us.edad FROM USER us 
                                                LEFT JOIN response res ON us.id = res.user_id');
            ?>
            <div class="container" id="resumen_nivel_4">
                <ul class="nav nav-tabs">
                    <li class="active"><a id="tab_0" data-toggle="tab" href="#menu0">Fases</a></li>
                    <li><a id="tab_1" data-toggle="tab" href="#menu1">Niveles</a></li>
                </ul>

                <div class="tab-content">
                    <div id="menu0" class="tab-pane fade in active">
                        <input class="form-control" id="myInput" type="text" placeholder="Search..">
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
                                    <th>Veces</th>
                                    <th>Tiempo</th>
                                    <th>Fase</th>
                                </tr>
                            </thead>
                            <tbody id="myTable">
                                <?php
                                while ($fila = mysqli_fetch_assoc($resultado1)) {
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
                                    echo '<td>' . $fila["cant"] . '</td>';
                                    echo '<td>' . $fila["time"] . '</td>';
                                    echo '<td>Fase_' . $fila["fase_id"] . '</td>';
                                    echo '</tr>';
                                }
                                ?>
                            </tbody>
                        </table>
                        <div class="container">
                            <h4>Exportar Fases a Excel</h4>
                            <div class="well-sm col-sm-12">
                                <div class="btn-group pull-right">
                                    <form action= "export_fases.php" method="post">
                                        <input type="hidden" name="user" value="<?php echo $nombre;?>">
                                        <input type="hidden" name="pass" value="<?php echo $pass;?>">
                                        <button type="submit" id="export_data" name='export_data' value="Export fases a excel" class="btn btn-info">Exportar a Excel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <input class="form-control" id="myInput2" type="text" placeholder="Search..">
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
                            <tbody id="myTable2">
                                <?php
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
                                ?>
                            </tbody>
                        </table>
                        <div class="container">
                            <h4>Exportar Niveles a Excel</h4>
                            <div class="well-sm col-sm-12">
                                <div class="btn-group pull-right">
                                    <form action= "export_levels.php" method="post">
                                        <input type="hidden" name="user" value="<?php echo $nombre;?>">
                                        <input type="hidden" name="pass" value="<?php echo $pass;?>">
                                        <button type="submit" id="export_data" name='export_data' value="Export niveles a excel" class="btn btn-info">Exportar a Excel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <?php
        } else {
            echo 'no puede acceder a esta info......';
        }
        mysqli_close($enlace);
        ?>
            
        <script>
            $(document).ready(function () {
                $("#myInput").on("keyup", function () {
                    var value = $(this).val().toLowerCase();
                    $("#myTable tr").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
                $("#myInput2").on("keyup", function () {
                    var value = $(this).val().toLowerCase();
                    $("#myTable2 tr").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });
        </script>

    </body>
</html>
