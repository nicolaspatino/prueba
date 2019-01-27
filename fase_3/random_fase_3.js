
var fase_3 = [];

fase_3[0] = [];
fase_3[0]['img'] = 'rana';
fase_3[0]['son'] = 'rana_s';
fase_3[0]['opt1'] = 'Rana';
fase_3[0]['opt2'] = 'Cerdo';
fase_3[0]['itm'] = 1;
fase_3[0]['let'] =1;
fase_3[0]['res'] = fase_3[0]['opt1'];

fase_3[1] = [];
fase_3[1]['img'] = 'serpiente';
fase_3[1]['son'] = 'serpiente_s';
fase_3[1]['opt1'] = 'Buho';
fase_3[1]['opt2'] = 'Serpiente';
fase_3[1]['itm'] = 2;
fase_3[1]['let'] =1;
fase_3[1]['res'] = fase_3[1]['opt2'];

fase_3[2] = [];
fase_3[2]['img'] = 'cerdo';
fase_3[2]['son'] = 'cerdo_s';
fase_3[2]['opt1'] = 'Grillo';
fase_3[2]['opt2'] = 'Cerdo';
fase_3[2]['itm'] = 3;
fase_3[2]['let'] =1;
fase_3[2]['res'] = fase_3[2]['opt2'];

fase_3[3] = [];
fase_3[3]['img'] = 'aguila';
fase_3[3]['son'] = 'aguila_s';
fase_3[3]['opt1'] = 'Aguila';
fase_3[3]['opt2'] = 'Lobo';
fase_3[3]['itm'] = 4;
fase_3[3]['let'] =1;
fase_3[3]['res'] = fase_3[3]['opt1'];

fase_3[4] = [];
fase_3[4]['img'] = 'buho';
fase_3[4]['son'] = 'buho_s';
fase_3[4]['opt1'] = 'Buho';
fase_3[4]['opt2'] = 'Rana';
fase_3[4]['itm'] = 5;
fase_3[4]['let'] =1;
fase_3[4]['res'] = fase_3[4]['opt1'];

fase_3[5] = [];
fase_3[5]['img'] = 'grillo';
fase_3[5]['son'] = 'grillo_s';
fase_3[5]['opt1'] = 'Serpiente';
fase_3[5]['opt2'] = 'Grillo';
fase_3[5]['itm'] = 6;
fase_3[5]['let'] =1;
fase_3[5]['res'] = fase_3[5]['opt2'];

fase_3[6] = [];
fase_3[6]['img'] = 'lobo';
fase_3[6]['son'] = 'lobo_s';
fase_3[6]['opt1'] = 'Lobo';
fase_3[6]['opt2'] = 'Aguila';
fase_3[6]['itm'] = 7;
fase_3[6]['let'] =1;
fase_3[6]['res'] = fase_3[6]['opt1'];

fase_3[7] = [];
fase_3[7]['img'] = 'leon';
fase_3[7]['son'] = 'pollo_s';
fase_3[7]['opt1'] = 'Leon';
fase_3[7]['opt2'] = 'Pollo';
fase_3[7]['itm'] = 8;
fase_3[7]['let'] =1;
fase_3[7]['res'] = fase_3[7]['opt2'];

fase_3[8] = [];
fase_3[8]['img'] = 'mono';
fase_3[8]['son'] = 'oveja_s';
fase_3[8]['opt1'] = 'Mono';
fase_3[8]['opt2'] = 'Oveja';
fase_3[8]['itm'] = 9;
fase_3[8]['let'] =1;
fase_3[8]['res'] = fase_3[8]['opt2'];

fase_3[9] = [];
fase_3[9]['img'] = 'oveja';
fase_3[9]['son'] = 'gallina_s';
fase_3[9]['opt1'] = 'Gallina';
fase_3[9]['opt2'] = 'Oveja';
fase_3[9]['itm'] = 10;
fase_3[9]['let'] =1;
fase_3[9]['res'] = fase_3[9]['opt1'];

fase_3[10] = [];
fase_3[10]['img'] = 'elefante';
fase_3[10]['son'] = 'leon_s';
fase_3[10]['opt1'] = 'Elefante';
fase_3[10]['opt2'] = 'Leon';
fase_3[10]['itm'] = 11;
fase_3[10]['let'] =1;
fase_3[10]['res'] = fase_3[10]['opt2'];

fase_3[11] = [];
fase_3[11]['img'] = 'pollo';
fase_3[11]['son'] = 'vaca_s';
fase_3[11]['opt1'] = 'Vaca';
fase_3[11]['opt2'] = 'Pollo';
fase_3[11]['itm'] = 12;
fase_3[11]['let'] =1;
fase_3[11]['res'] = fase_3[11]['opt1'];

fase_3[12] = [];
fase_3[12]['img'] = 'gallo';
fase_3[12]['son'] = 'elefante_s';
fase_3[12]['opt1'] = 'Gallo';
fase_3[12]['opt2'] = 'Elefante';
fase_3[12]['itm'] = 13;
fase_3[12]['let'] =1;
fase_3[12]['res'] = fase_3[12]['opt2'];

fase_3[13] = [];
fase_3[13]['img'] = 'vaca';
fase_3[13]['son'] = 'mono_s';
fase_3[13]['opt1'] = 'Mono';
fase_3[13]['opt2'] = 'Vaca';
fase_3[13]['itm'] = 14;
fase_3[13]['let'] =1;
fase_3[13]['res'] = fase_3[13]['opt1'];

fase_3[14] = [];
fase_3[14]['img'] = 'gallina';
fase_3[14]['son'] = 'gallo_s';
fase_3[14]['opt1'] = 'Gallina';
fase_3[14]['opt2'] = 'Gallo';
fase_3[14]['itm'] = 15;
fase_3[14]['let'] =1;
fase_3[14]['res'] = fase_3[14]['opt2'];


var new_order_fase_3; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id de usuario
var intento = 0;
var position = 0;
var fase_3_repet_2 = [];
var fase_3_repet_3 = [];
var morir = 0;
/*
 * 
 * @type type
 */
class random_fase_3{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_fase_3(arr,inte){
        intento = inte;
        position = 0;
        var new_order = arr.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../pix/animales/'+new_order[k]['img']+'.png';
            document.getElementById('menu'+k+'_audio').src = '../pix/Sonidos/'+new_order[k]['son']+'.wav';
            document.getElementById('menu'+k+'_opt1').innerHTML = new_order[k]['opt1'];
            document.getElementById('menu'+k+'_opt2').innerHTML = new_order[k]['opt2'];
            primeraToma = Date.now();

        }
        new_order_fase_3 = new_order;
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
        
        if(intento != 1){
            setTimeout(function(){ 
                document.getElementById("tab_0").click();
                document.getElementById("menu0_audio").play();
                document.getElementById('new_inten').style.display = 'none';
                if(intento == 3 && new_order_fase_3.length == 1){
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
        new_order_fase_3[key]['res_user'] = new_order_fase_3[key]['opt'+opt];
        new_order_fase_3[key]['time'] = rf3.medir_tiempo();
        var ultimo = (new_order_fase_3.length)-1;
        document.getElementById('menu'+key+'_audio').pause();
        document.getElementById('menu'+key).classList.remove("active");
        document.getElementById('new_inten').style.display = 'block';
        if(new_order_fase_3[key]['res_user'] == new_order_fase_3[key]['res']){
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-check"></i>';
        }else{
            if(intento == 1){
                fase_3_repet_2.push(new_order_fase_3[key]);
            }else if(intento == 2){
                fase_3_repet_3.push(new_order_fase_3[key]);
            }else if(intento == 3){
                morir = 1;
                document.getElementById('resumen_fase_3').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                document.getElementById('new_inten').style.display = 'block';
            }
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-close"></i>';
        }
        if(key < ultimo){
            position = key+1;
            setTimeout(function(){ 
                document.getElementById("tab_"+(key+1)).click();
                document.getElementById('new_inten').style.display = 'none';
                document.getElementById("menu"+(key+1)+'_audio').play();
                primeraToma = Date.now();
            }, 1200);
            
        }else{
            rf3.ajax_fase_3(new_order_fase_3);
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
    ajax_fase_3(obj){
        var rv = {};
        for (var i = 0; i < obj.length; ++i){
            rv[i] = Object.assign({}, obj[i]);
        }
        $.ajax({
            url : '../methods/save_fases.php',
            data : {action: 3,user: user_id, data:JSON.stringify(rv), letra: 1, inte: intento},
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
                        if(intento == 1 && fase_3_repet_2.length != 0){
                            rf3.order_fase_3(fase_3_repet_2, 2);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf3.order_fase_3('+fase_3_repet_2+', 2)">Volver a Intentar</button>';
                        }else if(intento == 2 && fase_3_repet_3.length != 0){
                            rf3.order_fase_3(fase_3_repet_3, 3);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf3.order_fase_3('+fase_3_repet_3+', 3)">Volver a Intentar</button>';
                        }else if(intento == 3 && morir == 1){
                            document.getElementById('resumen_fase_3').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                            document.getElementById('new_inten').style.display = 'block';
                        }else{
                            document.getElementById('new_inten').style.display = 'none';
                            document.getElementById('instruccion').style.display = "block";
                            document.getElementById('resumen_fase_3').style.backgroundImage = "url(../pix/Imagenes/fase_4.png)";
                            document.getElementById('resumen_fase_3').style.height = "100%";
                            document.getElementById('resumen_fase_3').style.position = "absolute";
                            document.getElementById('resumen_fase_3').innerHTML +='<button type="button" class="button_ir" onclick="updateReloj('+user_id+',4)">Ir a la fase 4</button>';
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
var rf3 = new random_fase_3;
rf3.order_fase_3(fase_3, 1);
document.onkeydown = rf3.compruebaTecla;
