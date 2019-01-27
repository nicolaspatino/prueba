var fase_2 = [];

fase_2[0] = [];
fase_2[0]['img'] = 'perro';
fase_2[0]['opt1'] = 'Lobo';
fase_2[0]['opt2'] = 'Perro';
fase_2[0]['itm'] = 1;
fase_2[0]['let'] =1;
fase_2[0]['res'] = fase_2[0]['opt2'];

fase_2[1] = [];
fase_2[1]['img'] = 'rana';
fase_2[1]['opt1'] = 'Rana';
fase_2[1]['opt2'] = 'Grillo';
fase_2[1]['itm'] = 2;
fase_2[1]['let'] =1;
fase_2[1]['res'] = fase_2[1]['opt1'];

fase_2[2] = [];
fase_2[2]['img'] = 'caballo';
fase_2[2]['opt1'] = 'Perro';
fase_2[2]['opt2'] = 'Caballo';
fase_2[2]['itm'] = 3;
fase_2[2]['let'] =1;
fase_2[2]['res'] = fase_2[2]['opt2'];

fase_2[3] = [];
fase_2[3]['img'] = 'cerdo';
fase_2[3]['opt1'] = 'Cerdo';
fase_2[3]['opt2'] = 'Oveja';
fase_2[3]['itm'] =4;
fase_2[3]['let'] =1;
fase_2[3]['res'] = fase_2[3]['opt1'];

fase_2[4] = [];
fase_2[4]['img'] = 'elefante';
fase_2[4]['opt1'] = 'Elefante';
fase_2[4]['opt2'] = 'Mono';
fase_2[4]['itm'] =  5;
fase_2[4]['let'] =1;
fase_2[4]['res'] = fase_2[4]['opt1'];

fase_2[5] = [];
fase_2[5]['img'] = 'gallina';
fase_2[5]['opt1'] = 'Gallina';
fase_2[5]['opt2'] = 'Gallo';
fase_2[5]['itm'] = 6;
fase_2[5]['let'] =1;
fase_2[5]['res'] = fase_2[5]['opt1'];

fase_2[6] = [];
fase_2[6]['img'] = 'gallo';
fase_2[6]['opt1'] = 'Gallo';
fase_2[6]['opt2'] = 'Vaca';
fase_2[6]['itm'] = 7;
fase_2[6]['let'] =1;
fase_2[6]['res'] = fase_2[6]['opt1'];

fase_2[7] = [];
fase_2[7]['img'] = 'buho';
fase_2[7]['opt1'] = 'Pollo';
fase_2[7]['opt2'] = 'Buho';
fase_2[7]['itm'] = 8;
fase_2[7]['let'] =1;
fase_2[7]['res'] = fase_2[7]['opt2'];

fase_2[8] = [];
fase_2[8]['img'] = 'grillo';
fase_2[8]['opt1'] = 'Serpiente';
fase_2[8]['opt2'] = 'Grillo';
fase_2[8]['itm'] = 9;
fase_2[8]['let'] =1;
fase_2[8]['res'] = fase_2[8]['opt2'];

fase_2[9] = [];
fase_2[9]['img'] = 'leon';
fase_2[9]['opt1'] = 'Lobo';
fase_2[9]['opt2'] = 'Leon';
fase_2[9]['itm'] = 10;
fase_2[9]['let'] =1;
fase_2[9]['res'] = fase_2[9]['opt2'];

fase_2[10] = [];
fase_2[10]['img'] = 'lobo';
fase_2[10]['opt1'] = 'Lobo';
fase_2[10]['opt2'] = 'Gato';
fase_2[10]['itm'] = 11;
fase_2[10]['let'] =1;
fase_2[10]['res'] = fase_2[10]['opt1'];

fase_2[11] = [];
fase_2[11]['img'] = 'mono';
fase_2[11]['opt1'] = 'Gato';
fase_2[11]['opt2'] = 'Mono';
fase_2[11]['itm'] =  12;
fase_2[11]['let'] =1;
fase_2[11]['res'] = fase_2[11]['opt2'];

fase_2[12] = [];
fase_2[12]['img'] = 'oveja';
fase_2[12]['opt1'] = 'Oveja';
fase_2[12]['opt2'] = 'Aguila';
fase_2[12]['itm'] =  13;
fase_2[12]['let'] =1;
fase_2[12]['res'] = fase_2[12]['opt1'];

fase_2[13] = [];
fase_2[13]['img'] = 'aguila';
fase_2[13]['opt1'] = 'Aguila';
fase_2[13]['opt2'] = 'Gallina';
fase_2[13]['itm'] = 14;
fase_2[13]['let'] =1;
fase_2[13]['res'] = fase_2[13]['opt1'];

fase_2[14] = [];
fase_2[14]['img'] = 'pollo';
fase_2[14]['opt1'] = 'Gallo';
fase_2[14]['opt2'] = 'Pollo';
fase_2[14]['itm'] = 15;
fase_2[14]['let'] =1;
fase_2[14]['res'] = fase_2[14]['opt2'];

fase_2[15] = [];
fase_2[15]['img'] = 'gato';
fase_2[15]['opt1'] = 'Perro';
fase_2[15]['opt2'] = 'Gato';
fase_2[15]['itm'] = 16;
fase_2[15]['let'] =1;
fase_2[15]['res'] = fase_2[15]['opt2'];

fase_2[16] = [];
fase_2[16]['img'] = 'serpiente';
fase_2[16]['opt1'] = 'Rana';
fase_2[16]['opt2'] ='Serpiente';
fase_2[16]['itm'] = 17;
fase_2[16]['let'] =1;
fase_2[16]['res'] = fase_2[16]['opt2'];

fase_2[17] = [];
fase_2[17]['img'] = 'vaca';
fase_2[17]['opt1'] = 'Vaca';
fase_2[17]['opt2'] = 'Caballo';
fase_2[17]['itm'] = 18;
fase_2[17]['let'] =1;
fase_2[17]['res'] = fase_2[17]['opt1'];


var new_order_fase_2; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id de usuario
var intento = 0;
var position = 0;
var fase_2_repet_2 = [];
var fase_2_repet_3 = [];
var morir = 0;
/*
 * 
 * @type type
 */
class random_fase_2{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_fase_2(arr,inte){
        intento = inte;
        position = 0;
        var new_order = arr.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../pix/animales/'+new_order[k]['img']+'.png';
            //document.getElementById('menu'+k+'_color').style.backgroundColor = new_order[k]['est'];
            document.getElementById('menu'+k+'_opt1').innerHTML = new_order[k]['opt1'];
            document.getElementById('menu'+k+'_opt2').innerHTML = new_order[k]['opt2'];
            primeraToma = Date.now();

        }
        new_order_fase_2 = new_order;
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
        if(intento != 1){
            setTimeout(function(){ 
                document.getElementById("tab_0").click();
                document.getElementById('new_inten').style.display = 'none';
                if(intento == 3 && new_order_fase_2.length == 1){
                    document.getElementById("menu0").classList.add("active");
                }
            }, 2200);
        }
        
        
    };
    /*
     * Guardar in array la respuesta y el tiempo, pasar al sigiente item y en el ultimo item enviar a guardar
     * @param {int} key
     * @param {int} opt
     * @returns {Generator}
     */
    onclik_respose(key, opt){
        new_order_fase_2[key]['res_user'] = new_order_fase_2[key]['opt'+opt];
        new_order_fase_2[key]['time'] = rf2.medir_tiempo();
        var ultimo = (new_order_fase_2.length)-1;
        document.getElementById('menu'+key).classList.remove("active");
        document.getElementById('new_inten').style.display = 'block';
        if(new_order_fase_2[key]['res_user'] == new_order_fase_2[key]['res']){
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-check"></i>';
        }else{
            if(intento == 1){
                fase_2_repet_2.push(new_order_fase_2[key]);
            }else if(intento == 2){
                fase_2_repet_3.push(new_order_fase_2[key]);
            }else if(intento == 3){
                morir = 1;
                document.getElementById('resumen_fase_2').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                document.getElementById('new_inten').style.display = 'block';
            }
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-close"></i>';
        }
        if(key < ultimo){
            position = key+1;
            setTimeout(function(){ 
                document.getElementById("tab_"+(key+1)).click();
                document.getElementById('new_inten').style.display = 'none';
                primeraToma = Date.now();
            }, 1200);
            
        }else{
            rf2.ajax_fase_2(new_order_fase_2);
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
    ajax_fase_2(obj){
        var rv = {};
        for (var i = 0; i < obj.length; ++i){
            rv[i] = Object.assign({}, obj[i]);
        }
        $.ajax({
            url : '../methods/save_fases.php',
            data : {action: 2,user: user_id, data:JSON.stringify(rv), letra: 1, inte: intento},
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
                        if(intento == 1 && fase_2_repet_2.length != 0){
                            rf2.order_fase_2(fase_2_repet_2, 2);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf2.order_fase_2('+fase_2_repet_2+', 2)">Volver a Intentar</button>';
                        }else if(intento == 2 && fase_2_repet_3.length != 0){
                            rf2.order_fase_2(fase_2_repet_3, 3)
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf2.order_fase_2('+fase_2_repet_3+', 3)">Volver a Intentar</button>';
                        }else if(intento == 3  && morir == 1){
                            document.getElementById('resumen_fase_2').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                            document.getElementById('new_inten').style.display = 'block';
                        }else{
                            document.getElementById('new_inten').style.display = 'none';
                            document.getElementById('instruccion').style.display = "block";
                            document.getElementById('resumen_fase_2').style.backgroundImage = "url(../pix/Imagenes/fase_3.png)";
                            document.getElementById('resumen_fase_2').style.height = "100%";
                            document.getElementById('resumen_fase_2').style.position = "absolute";
                            document.getElementById('resumen_fase_2').innerHTML +='<button type="button" class="button_ir" onclick="updateReloj('+user_id+',3)">Ir a la fase 3</button>';
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

var rf2 = new random_fase_2;
rf2.order_fase_2(fase_2, 1);
document.onkeydown = rf2.compruebaTecla;
/*
 * No permitir al usurio recargar la pagina hasta terminar la fase
 * @returns {Boolean}
 */
/*document.onkeydown = function(){ 
    if(window.event && window.event.keyCode == 116){ window.event.keyCode = 505; } 
    if(window.event && window.event.keyCode == 505){ return false; } 
} */