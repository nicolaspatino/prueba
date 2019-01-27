
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Resumen Fases</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../style.css"/>
        <link rel="stylesheet" type="text/css" href="../../css/tablas.css"/>
        <script src="../cuenta_regre.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <style>
            #resumen_fase_4{
                background-image:url(../../pix/Imagenes/nivel_1.png);
                background-size: 65%;
                background-repeat: no-repeat;
                background-position: top;
                position: absolute;
            }
        </style>
    </head>
    <body id="resumen_fase_4">
        <?php
        /*
        $enlace = mysqli_connect("localhost", "dani", "dani", "mafe_congreso");
        $correctas = mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                            WHERE res.user_id = '.$_GET['id_user'].' AND res.fase_id = 1');
        echo '<table>
            <th colspan="5" >Fase 1</th>
            <tr>
              <th>opt1</th>
              <th>opt2</th>
              <th>Su respuesta</th>
              <th>Bien/Mal</th>
              <th>Tiempo</th>
            </tr>';

        
        while ($row = mysqli_fetch_assoc($correctas)) {
          echo '<tr>';
            echo '<td>'.$row['opt1'].'</td>'
                .'<td>'.$row['opt2'].'</td>'
                .'<td>'.$row['response_user'].'</td>';
            if($row['response_user'] == $row['res_correc']){
                echo '<td><i class="fa fa-fw fa-check"></i></td>';
            }else{
                echo '<td><i class="fa fa-fw fa-close"></i></td>';
            }
            echo '<td>'.$row['time'].'</td>'
             .'</tr>';
        }
        echo '</table><br>';
        
        
        
        $correctas = mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                            WHERE res.user_id = '.$_GET['id_user'].' AND res.fase_id = 2');
        echo '<table>
            <th colspan="5" >Fase 2</th>
            <tr>
              <th>opt1</th>
              <th>opt2</th>
              <th>Su respuesta</th>
              <th>Bien/Mal</th>
              <th>Tiempo</th>
            </tr>';

        
        while ($row = mysqli_fetch_assoc($correctas)) {
          echo '<tr>';
            echo '<td>'.$row['opt1'].'</td>'
                .'<td>'.$row['opt2'].'</td>'
                .'<td>'.$row['response_user'].'</td>';
            if($row['response_user'] == $row['res_correc']){
                echo '<td><i class="fa fa-fw fa-check"></i></td>';
            }else{
                echo '<td><i class="fa fa-fw fa-close"></i></td>';
            }
            echo '<td>'.$row['time'].'</td>'
             .'</tr>';
        }
        echo '</table><br>';
        
        
        
        $correctas = mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                            WHERE res.user_id = '.$_GET['id_user'].' AND res.fase_id = 3');
        echo '<table>
            <th colspan="5" >Fase 3</th>
            <tr>
              <th>opt1</th>
              <th>opt2</th>
              <th>Su respuesta</th>
              <th>Bien/Mal</th>
              <th>Tiempo</th>
            </tr>';

        
        while ($row = mysqli_fetch_assoc($correctas)) {
          echo '<tr>';
            echo '<td>'.$row['opt1'].'</td>'
                .'<td>'.$row['opt2'].'</td>'
                .'<td>'.$row['response_user'].'</td>';
            if($row['response_user'] == $row['res_correc']){
                echo '<td><i class="fa fa-fw fa-check"></i></td>';
            }else{
                echo '<td><i class="fa fa-fw fa-close"></i></td>';
            }
            echo '<td>'.$row['time'].'</td>'
             .'</tr>';
        }
        echo '</table><br>';
        
        
        
        $correctas = mysqli_query($enlace,'SELECT * FROM response_prueba res 
                                            WHERE res.user_id = '.$_GET['id_user'].' AND res.fase_id = 4');
        echo '<table>
            <th colspan="5" >Fase 4</th>
            <tr>
              <th>opt1</th>
              <th>opt2</th>
              <th>Su respuesta</th>
              <th>Bien/Mal</th>
              <th>Tiempo</th>
            </tr>';

        
        while ($row = mysqli_fetch_assoc($correctas)) {
          echo '<tr>';
            echo '<td>'.$row['opt1'].'</td>'
                .'<td>'.$row['opt2'].'</td>'
                .'<td>'.$row['response_user'].'</td>';
            if($row['response_user'] == $row['res_correc']){
                echo '<td><i class="fa fa-fw fa-check"></i></td>';
            }else{
                echo '<td><i class="fa fa-fw fa-close"></i></td>';
            }
            echo '<td>'.$row['time'].'</td>'
             .'</tr>';
        }
        echo '</table><br>';
        */
        echo '<button type="button" class="button_ir" onclick="updateReloj_nivel('.$_GET['id_user'].',1)">Ir al nivel 1</button>'
        ?>
        <div id="CuentaAtras"></div>    
    </body>
</html>
