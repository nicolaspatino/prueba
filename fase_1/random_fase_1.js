/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fase_1 = [];

fase_1[0] = [];
fase_1[0]['est'] = '#FFFF00';
fase_1[0]['opt1'] = 'Naranja';
fase_1[0]['opt2'] = 'Amarillo';
fase_1[0]['itm'] = 1;
fase_1[0]['let'] = 1;
fase_1[0]['res'] = fase_1[0]['opt2'];

fase_1[1] = [];
fase_1[1]['est'] = '#8B4513';
fase_1[1]['opt1'] = 'Café';
fase_1[1]['opt2'] = 'Rojo';
fase_1[1]['itm'] = 2;
fase_1[1]['let'] =1;
fase_1[1]['res'] = fase_1[1]['opt1'];

fase_1[2] = [];
fase_1[2]['est'] = '#0000FF';
fase_1[2]['opt1'] = 'Verde';
fase_1[2]['opt2'] = 'Azul';
fase_1[2]['itm'] = 3;
fase_1[2]['let'] =1;
fase_1[2]['res'] = fase_1[2]['opt2'];

fase_1[3] = [];
fase_1[3]['est'] = '#FF00FF';
fase_1[3]['opt1'] = 'Morado ';
fase_1[3]['opt2'] = 'Fuccia';
fase_1[3]['itm'] = 4;
fase_1[3]['let'] =1;
fase_1[3]['res'] = fase_1[3]['opt2'];

fase_1[4] = [];
fase_1[4]['est'] = '#FF0000';
fase_1[4]['opt1'] = 'Rojo';
fase_1[4]['opt2'] = 'Naranja';
fase_1[4]['itm'] = 5;
fase_1[4]['let'] =1;
fase_1[4]['res'] = fase_1[4]['opt1'];

fase_1[5] = [];
fase_1[5]['est'] = '#00FF00';
fase_1[5]['opt1'] = 'Amarillo';
fase_1[5]['opt2'] = 'Verde';
fase_1[5]['itm'] = 6;
fase_1[5]['let'] =1;
fase_1[5]['res'] = fase_1[5]['opt2'];

fase_1[6] = [];
fase_1[6]['est'] = '#9400D3';
fase_1[6]['opt1'] = 'Azul';
fase_1[6]['opt2'] = 'Morado';
fase_1[6]['itm'] = 7;
fase_1[6]['let'] =1;
fase_1[6]['res'] = fase_1[6]['opt2'];

fase_1[7] = [];
fase_1[7]['est'] = '#FF8C00';
fase_1[7]['opt1'] = 'Naranja';
fase_1[7]['opt2'] = 'Fuccia';
fase_1[7]['itm'] = 8;
fase_1[7]['let'] =1;
fase_1[7]['res'] = fase_1[7]['opt1'];


var new_order_fase_1; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id de usuario
var intento = 0;
var position = 0;
var fase_1_repet_2 = [];
var fase_1_repet_3 = [];
var morir = 0;
/*
 * 
 * @type type
 */
class random_fase_1{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_fase_1(arr,inte){
        intento = inte;
        position = 0;
        var new_order = arr.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').style.border = "35px solid "+new_order[k]['est'];
            //document.getElementById('menu'+k+'_color').style.backgroundColor = new_order[k]['est'];
            document.getElementById('menu'+k+'_opt1').innerHTML = new_order[k]['opt1'];
            document.getElementById('menu'+k+'_opt2').innerHTML = new_order[k]['opt2'];
            primeraToma = Date.now();
        }
        new_order_fase_1 = new_order;
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
        if(intento != 1){
            setTimeout(function(){ 
                document.getElementById("tab_0").click();
                document.getElementById('new_inten').style.display = 'none';
                if(intento == 3 && new_order_fase_1.length == 1){
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
        new_order_fase_1[key]['res_user'] = new_order_fase_1[key]['opt'+opt];
        new_order_fase_1[key]['time'] = rf1.medir_tiempo();
        var ultimo = (new_order_fase_1.length)-1;
        document.getElementById('menu'+key).classList.remove("active");
        document.getElementById('new_inten').style.display = 'block';
        if(new_order_fase_1[key]['res_user'] == new_order_fase_1[key]['res']){
            document.getElementById('new_inten').innerHTML = '<i class="fa fa-fw fa-check"></i>';
        }else{
            if(intento == 1){
                fase_1_repet_2.push(new_order_fase_1[key]);
            }else if(intento == 2){
                fase_1_repet_3.push(new_order_fase_1[key]);
            }else if(intento == 3){
                document.getElementById('resumen_fase_1').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                document.getElementById('new_inten').style.display = 'block';
                morir = 1;
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
            rf1.ajax_fase_1(new_order_fase_1);
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
    ajax_fase_1(obj){
        console.log(intento, fase_1_repet_2.length);
        console.log(intento, fase_1_repet_3.length);
        var rv = {};
        for (var i = 0; i < obj.length; ++i){
            rv[i] = Object.assign({}, obj[i]);
        }
        $.ajax({
            url : '../methods/save_fases.php',
            data : {action: 1,user: user_id, data:JSON.stringify(rv), letra: 1, inte: intento},
            type : 'POST',
            success : function(json) {
                
            },
            error : function(result, textStatus, errorThrown) {
                console.log('Error al  '+intento, obj);
            },
            complete : function(json, status) {
                if(status != 'error'){                  
                    try {
                        document.getElementById('new_inten').style.display = 'block';
                        document.getElementById('new_inten').innerHTML = 'Volver a Intentar';
                        var fjson = JSON.parse(json.responseText);
                        if(intento == 1 && fase_1_repet_2.length != 0){
                            rf1.order_fase_1(fase_1_repet_2, 2);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf1.order_fase_1('+fase_1_repet_2+', 2)">Volver a Intentar</button>';
                        }else if(intento == 2 && fase_1_repet_3.length != 0){
                            rf1.order_fase_1(fase_1_repet_3, 3);
                            //document.getElementById('new_inten').innerHTML = '<button type="button" class="button_ir" onclick="rf1.order_fase_1('+fase_1_repet_3+', 3)">Volver a Intentar</button>';
                        }else if(intento == 3 && morir == 1){
                            document.getElementById('resumen_fase_1').innerHTML = '<div id="new_inten">Prueba terminada</div>';
                            document.getElementById('new_inten').style.display = 'block';
                        }else{
                            document.getElementById('new_inten').style.display = 'none';
                            document.getElementById('instruccion').style.display = "block";
                            document.getElementById('resumen_fase_1').style.backgroundImage = "url(../pix/Imagenes/fase_2.png)";
                            document.getElementById('resumen_fase_1').style.height = "100%";
                            document.getElementById('resumen_fase_1').style.position = "absolute";
                            document.getElementById('resumen_fase_1').innerHTML +='<button type="button" class="button_ir" onclick="updateReloj('+user_id+',2)">Ir a la fase 2</button>';
                        }
                        
                    } catch (e) {
                        console.log('No se guardó bien en el intento '+intento, obj);
                    } finally {

                    }  
                }
            }
        });
    };
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
var rf1 = new random_fase_1;
rf1.order_fase_1(fase_1, 1);
document.onkeydown = rf1.compruebaTecla;
/*
 * No permitir al usurio recargar la pagina hasta terminar la fase
 * @returns {Boolean}
 */
/*
window.onkeydown = function(){ 
    if(window.event && window.event.keyCode == 116){ window.event.keyCode = 505; } 
    if(window.event && window.event.keyCode == 505){ return false; } 
} */


 /*document.getElementById('resumen_fase_1').innerHTML = '<h2>Sus respuestas:</h2>';
                            $.each(fjson, function(k,v){
                                var div_html = '<div class="tok_no_selec">'+
                                                    '<div class="resumen_opt">Opción 1: '+v.opt1+'</div>'+
                                                    '<div class="resumen_opt">Opción 2: '+v.opt2+'</div>'+
                                                    '<div class="resumen_opt">Su respuesta: '+v.response_user+'</div>';
                                    if(v.response_user == v.res_correc){
                                        div_html += '<i class="fa fa-fw fa-check"></i>';
                                    }else{
                                        div_html += '<i class="fa fa-fw fa-close"></i>';
                                    }
                                    div_html += '</div>';
                                document.getElementById('resumen_fase_1').innerHTML += div_html;
                            });*/