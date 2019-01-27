var fase_4 = [];

fase_4[0] = [];
fase_4[0]['img'] = 'gato_z';
fase_4[0]['son'] = 'vaca_s';
fase_4[0]['opt1'] = 'gato';
fase_4[0]['opt2'] = 'vaca';
fase_4[0]['itm'] = 1;
fase_4[0]['let'] = 0;
fase_4[0]['res'] = fase_4[0]['opt1'];

fase_4[1] = [];
fase_4[1]['img'] = 'lobo_a';
fase_4[1]['son'] = 'gallina_s';
fase_4[1]['opt1'] = 'lobo';
fase_4[1]['opt2'] = 'gallina';
fase_4[1]['itm'] = 2;
fase_4[1]['let'] = 0;
fase_4[1]['res'] = fase_4[1]['opt2'];

fase_4[2] = [];
fase_4[2]['img'] = 'elefante_z';
fase_4[2]['son'] = 'grillo_s';
fase_4[2]['opt1'] = 'elefante';
fase_4[2]['opt2'] = 'grillo';
fase_4[2]['itm'] = 3;
fase_4[2]['let'] = 0;
fase_4[2]['res'] = fase_4[2]['opt1'];

fase_4[3] = [];
fase_4[3]['img'] = 'leon_z';
fase_4[3]['son'] = 'grillo_s';
fase_4[3]['opt1'] = 'leon';
fase_4[3]['opt2'] = 'grillo';
fase_4[3]['itm'] = 4;
fase_4[3]['let'] = 0;
fase_4[3]['res'] = fase_4[3]['opt1'];

fase_4[4] = [];
fase_4[4]['img'] = 'oveja_a';
fase_4[4]['son'] = 'serpiente_s';
fase_4[4]['opt1'] = 'oveja';
fase_4[4]['opt2'] = 'serpiente';
fase_4[4]['itm'] =5;
fase_4[4]['let'] = 0;
fase_4[4]['res'] = fase_4[4]['opt2'];

fase_4[5] = [];
fase_4[5]['img'] = 'vaca_a';
fase_4[5]['son'] = 'elefante_s';
fase_4[5]['opt1'] = 'vaca';
fase_4[5]['opt2'] = 'elefante';
fase_4[5]['itm'] = 6;
fase_4[5]['let'] = 0;
fase_4[5]['res'] = fase_4[5]['opt2'];

fase_4[6] = [];
fase_4[6]['img'] = 'pollo_z';
fase_4[6]['son'] = 'lobo_s';
fase_4[6]['opt1'] = 'pollo';
fase_4[6]['opt2'] = 'lobo';
fase_4[6]['itm'] = 7;
fase_4[6]['let'] = 0;
fase_4[6]['res'] = fase_4[6]['opt1'];

fase_4[7] = [];
fase_4[7]['img'] = 'mono_a';
fase_4[7]['son'] = 'oveja_s';
fase_4[7]['opt1'] = 'mono';
fase_4[7]['opt2'] = 'oveja';
fase_4[7]['itm'] = 8;
fase_4[7]['let'] = 0;
fase_4[7]['res'] = fase_4[7]['opt2'];

fase_4[8] = [];
fase_4[8]['img'] = 'serpiente_z';
fase_4[8]['son'] = 'pollo_s';
fase_4[8]['opt1'] = 'serpiente';
fase_4[8]['opt2'] = 'pollo';
fase_4[8]['itm'] = 9;
fase_4[8]['let'] = 0;
fase_4[8]['res'] = fase_4[8]['opt1'];

fase_4[9] = [];
fase_4[9]['img'] = 'grillo_a';
fase_4[9]['son'] = 'mono_s';
fase_4[9]['opt1'] = 'mono';
fase_4[9]['opt2'] = 'grillo';
fase_4[9]['itm'] = 10;
fase_4[9]['let'] = 0;
fase_4[9]['res'] = fase_4[9]['opt1'];


var new_order_fase_4; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id de usuario
var intento = 0;
var position = 0;
var fase_4_repet_2 = [];
var fase_4_repet_3 = [];
var morir =0;
/*
 * 
 * @type type
 */
class random_fase_4{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_fase_4(arr,inte){
        intento = inte;
        position = 0;
        var new_order = arr.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../../pix/Imagenes/'+new_order[k]['img']+'.png';
            document.getElementById('menu'+k+'_audio').src = '../../pix/Sonidos/'+new_order[k]['son']+'.wav';
            document.getElementById('img_btn_'+k+'_1').src = '../../pix/animales/'+new_order[k]['opt1']+'.png';
            document.getElementById('img_btn_'+k+'_2').src = '../../pix/animales/'+new_order[k]['opt2']+'.png';
            primeraToma = Date.now();

        }
        new_order_fase_4 = new_order;
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
        if(intento != 1){
            setTimeout(function(){ 
                document.getElementById("tab_0").click();
                document.getElementById("menu0_audio").play();
                document.getElementById('new_inten').style.display = 'none';
                if(intento == 3 && new_order_fase_4.length == 1){
                    document.getElementById("menu0").classList.add("active");
                }
            }, 2200);
        }else{
            document.getElementById("menu0_audio").play();
        }
        
        
    };
    /*
     * Guardar in array la respuesta y el tiempo, pasar al sigiente item y en el ultimo item enviar a guardar
     * @param {int} key
     * @param {int} opt
     * @returns {Generator}
     */
    onclik_respose(key, opt){
        new_order_fase_4[key]['res_user'] = new_order_fase_4[key]['opt'+opt];
        new_order_fase_4[key]['time'] = rf4.medir_tiempo();
        var ultimo = (new_order_fase_4.length)-1;
        document.getElementById('menu'+key+'_audio').pause();
        document.getElementById('menu'+key).classList.remove("active");
        document.getElementById('new_inten').style.display = 'block';
        if(new_order_fase_4[key]['res_user'] == new_order_fase_4[key]['res']){
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-check"></i>';
        }else{
            if(intento == 1){
                fase_4_repet_2.push(new_order_fase_4[key]);
            }else if(intento == 2){
                fase_4_repet_3.push(new_order_fase_4[key]);
            }else if(intento == 3){
                morir = 1;
                document.getElementById('resumen_fase_4').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                document.getElementById('new_inten').style.display = 'block';
            }
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-close"></i>';
        }
        if(key < ultimo){
            position = key+1;
            setTimeout(function(){ 
                document.getElementById("tab_"+(key+1)).click();
                document.getElementById("menu"+(key+1)+'_audio').play();
                document.getElementById('new_inten').style.display = 'none';
                primeraToma = Date.now();
            }, 1200);
            
        }else{
            rf4.ajax_fase_4(new_order_fase_4);
        }
    };
    

    /**
     * Medir el tiempo en segundo de la respuesta
     * @returns {Number} secons
     */
    medir_tiempo(){
        var segundaToma = Date.now();
        return (segundaToma-primeraToma)/1000;
    }
    /*
     * Guardar las respuestas de la fase uno
     * @returns {Generator}
     */
    ajax_fase_4(obj){
        var rv = {};
        for (var i = 0; i < obj.length; ++i){
            rv[i] = Object.assign({}, obj[i]);
        }
        $.ajax({
            url : '../../methods/save_fases.php',
            data : {action: 4,user: user_id, data:JSON.stringify(rv), letra: 0, inte: intento},
            type : 'POST',
            success : function(json) {
                
            },
            error : function(result, textStatus, errorThrown) {
                console.log('Error al  '+intento, obj);
            },
            complete : function(json, status) {
                if(status != 'error'){                  
                    try {
                        document.getElementById('new_inten').innerHTML = 'Volver a Intentar';
                        document.getElementById('new_inten').style.display = 'block';
                        var fjson = JSON.parse(json.responseText);
                        if(intento == 1 && fase_4_repet_2.length != 0){
                            rf4.order_fase_4(fase_4_repet_2, 2);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf4.order_fase_4('+fase_4_repet_2+', 2)">Volver a Intentar</button>';
                        }else if(intento == 2 && fase_4_repet_3.length != 0){
                            rf4.order_fase_4(fase_4_repet_3, 3);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf4.order_fase_4('+fase_4_repet_3+', 3)">Volver a Intentar</button>';
                        }else if(intento == 3  && morir == 1){
                            document.getElementById('resumen_fase_4').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                            document.getElementById('new_inten').style.display = 'block';
                        }else{
                            document.getElementById('new_inten').style.display = 'none';
                            document.getElementById('resumen_fase_4').style.backgroundImage = "url(../../pix/Imagenes/6.png)";
                            document.getElementById('resumen_fase_4').style.height = "100%";
                            document.getElementById('resumen_fase_4').style.position = "absolute";
                            document.getElementById('resumen_fase_4').innerHTML +='<button type="button" class="button_ir" onclick="location.href = \'resumen_all_fases.php?id_user='+user_id+'\'">Iniciar</button>';
                        }
                        
                    } catch (e) {
                        console.log('No se guardó bien en el intento '+intento, obj);
                    } finally {

                    }  
                }
            }
        });
    }
    compruebaTecla(evento){
        var keyCode = document.layers ? evento.which : document.all ? event.keyCode : document.getElementById ? evento.keyCode : 0;
        if (keyCode == 39){ //alert("flecha derecha");
            document.getElementById('menu'+position+'_opt2').click();
        }else if (keyCode == 37){//alert("flecha izquierda");
            document.getElementById('menu'+position+'_opt1').click();
        }
        return true;
    }

}
var rf4 = new random_fase_4;
rf4.order_fase_4(fase_4,1);
document.onkeydown = rf4.compruebaTecla;
 