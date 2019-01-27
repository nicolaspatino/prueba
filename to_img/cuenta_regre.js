/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var totalTiempo = 5;
    function updateReloj(idUser, fase){
        var div = document.getElementById('CuentaAtras');
        div.style.display = 'block';
        document.getElementById('instruccion').style.display = "block";
        if(totalTiempo==0){
            div.innerHTML = '<h3>VAMOS</h3>';
            window.location =  '../fase_'+fase+'/fase_'+fase+'.php?id_user='+idUser;
        }else{

            div.innerHTML = '<div class="segundos_'+totalTiempo+'">'+ totalTiempo+'</div>';
            /* Restamos un segundo al tiempo restante */
            totalTiempo-=1;
            /* Ejecutamos nuevamente la función al pasar 1000 milisegundos (1 segundo) */
            setTimeout('updateReloj('+idUser+', '+fase+')',1000);
        }
    }
    
    function updateReloj_nivel(idUser, nivel){
        var div = document.getElementById('CuentaAtras');
        div.style.display = 'block';
        if(totalTiempo==0){
            div.innerHTML = '<h3>VAMOS</h3>';
            window.location =  '../nivel_'+nivel+'/nivel_'+nivel+'.php?id_user='+idUser;
        }else{
            div.innerHTML = '<div class="segundos_'+totalTiempo+'">'+ totalTiempo+'</div>';
            totalTiempo-=1;
            setTimeout('updateReloj_nivel('+idUser+', '+nivel+')',1000);
        }
    }
