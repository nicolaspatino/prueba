var nivel_3 = [];

nivel_3[0] = [];
nivel_3[0]['img'] = 'aguila_n';
nivel_3[0]['son'] = 'gato_s';
nivel_3[0]['opt1'] = 'aguila';
nivel_3[0]['opt2'] = 'gato';
nivel_3[0]['itm'] = 1;
nivel_3[0]['let'] = 0;
nivel_3[0]['res'] = nivel_3[0]['opt1'];

nivel_3[1] = [];
nivel_3[1]['img'] = 'buho_v';
nivel_3[1]['son'] = 'grillo_s';
nivel_3[1]['opt1'] = 'buho';
nivel_3[1]['opt2'] = 'grillo';
nivel_3[1]['itm'] = 2;
nivel_3[1]['let'] = 0;
nivel_3[1]['res'] = nivel_3[1]['opt2'];


nivel_3[2] = [];
nivel_3[2]['img'] = 'caballo_z';
nivel_3[2]['son'] = 'oveja_s';
nivel_3[2]['opt1'] = 'caballo';
nivel_3[2]['opt2'] = 'oveja';
nivel_3[2]['itm'] = 3;
nivel_3[2]['let'] = 0;
nivel_3[2]['res'] = nivel_3[2]['opt2'];


nivel_3[3] = [];
nivel_3[3]['img'] = 'gallina_a';
nivel_3[3]['son'] = 'gallo_s';
nivel_3[3]['opt1'] = 'gallina';
nivel_3[3]['opt2'] = 'gallo';
nivel_3[3]['itm'] = 4;
nivel_3[3]['let'] = 0;
nivel_3[3]['res'] = nivel_3[3]['opt1'];


nivel_3[4] = [];
nivel_3[4]['img'] = 'elefante_m';
nivel_3[4]['son'] = 'caballo_s';
nivel_3[4]['opt1'] = 'elefante';
nivel_3[4]['opt2'] = 'caballo';
nivel_3[4]['itm'] = 5;
nivel_3[4]['let'] = 0;
nivel_3[4]['res'] = nivel_3[4]['opt2'];


nivel_3[5] = [];
nivel_3[5]['img'] = 'cerdo_v';
nivel_3[5]['son'] = 'buho_s';
nivel_3[5]['opt1'] = 'cerdo';
nivel_3[5]['opt2'] = 'buho';
nivel_3[5]['itm'] = 6;
nivel_3[5]['let'] = 0;
nivel_3[5]['res'] = nivel_3[5]['opt2'];


nivel_3[6] = [];
nivel_3[6]['img'] = 'perro_n';
nivel_3[6]['son'] = 'mono_s';
nivel_3[6]['opt1'] = 'Perro';
nivel_3[6]['opt2'] = 'mono';
nivel_3[6]['itm'] = 7;
nivel_3[6]['let'] = 0;
nivel_3[6]['res'] = nivel_3[6]['opt1'];


nivel_3[7] = [];
nivel_3[7]['img'] = 'gato_m';
nivel_3[7]['son'] = 'aguila_s';
nivel_3[7]['opt1'] = 'gato';
nivel_3[7]['opt2'] = 'aguila';
nivel_3[7]['itm'] = 8;
nivel_3[7]['let'] = 0;
nivel_3[7]['res'] = nivel_3[7]['opt2'];


nivel_3[8] = [];
nivel_3[8]['img'] = 'grillo_r';
nivel_3[8]['son'] = 'lobo_s';
nivel_3[8]['opt1'] = 'grillo';
nivel_3[8]['opt2'] = 'lobo';
nivel_3[8]['itm'] = 9;
nivel_3[8]['let'] = 0;
nivel_3[8]['res'] = nivel_3[8]['opt1'];


nivel_3[9] = [];
nivel_3[9]['img'] = 'leon_v';
nivel_3[9]['son'] = 'gallo_s';
nivel_3[9]['opt1'] = 'leon';
nivel_3[9]['opt2'] = 'gallo';
nivel_3[9]['itm'] = 10;
nivel_3[9]['let'] = 0;
nivel_3[9]['res'] = nivel_3[9]['opt2'];


nivel_3[10] = [];
nivel_3[10]['img'] = 'lobo_n';
nivel_3[10]['son'] = 'elefante_s';
nivel_3[10]['opt1'] = 'lobo';
nivel_3[10]['opt2'] = 'elefante';
nivel_3[10]['itm'] = 11;
nivel_3[10]['let'] = 0;
nivel_3[10]['res'] = nivel_3[10]['opt1'];


nivel_3[11] = [];
nivel_3[11]['img'] = 'mono_z';
nivel_3[11]['son'] = 'pollo_s';
nivel_3[11]['opt1'] = 'mono';
nivel_3[11]['opt2'] = 'pollo';
nivel_3[11]['itm'] = 12;
nivel_3[11]['let'] = 0;
nivel_3[11]['res'] = nivel_3[11]['opt2'];


nivel_3[12] = [];
nivel_3[12]['img'] = 'oveja_r';
nivel_3[12]['son'] = 'perro_s';
nivel_3[12]['opt1'] = 'oveja';
nivel_3[12]['opt2'] = 'perro';
nivel_3[12]['itm'] = 13;
nivel_3[12]['let'] = 0;
nivel_3[12]['res'] = nivel_3[12]['opt1'];


nivel_3[13] = [];
nivel_3[13]['img'] = 'gallo_z';
nivel_3[13]['son'] = 'rana_s';
nivel_3[13]['opt1'] = 'gallo';
nivel_3[13]['opt2'] = 'rana';
nivel_3[13]['itm'] = 14;
nivel_3[13]['let'] = 0;
nivel_3[13]['res'] = nivel_3[13]['opt2'];


nivel_3[14] = [];
nivel_3[14]['img'] = 'pollo_a';
nivel_3[14]['son'] = 'gallina_s';
nivel_3[14]['opt1'] = 'pollo';
nivel_3[14]['opt2'] = 'gallina';
nivel_3[14]['itm'] = 15;
nivel_3[14]['let'] = 0;
nivel_3[14]['res'] = nivel_3[14]['opt1'];


nivel_3[15] = [];
nivel_3[15]['img'] = 'rana_m';
nivel_3[15]['son'] = 'leon_s';
nivel_3[15]['opt1'] = 'rana';
nivel_3[15]['opt2'] = 'leon';
nivel_3[15]['itm'] = 16;
nivel_3[15]['let'] = 0;
nivel_3[15]['res'] = nivel_3[15]['opt2'];


var new_order_nivel_3; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id del usuario
var position = 0;
/*
 * 
 * @type type
 */
class random_nivel_3{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_nivel_3(){
        position = 0;
        var new_order = nivel_3.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../../pix/Imagenes/'+new_order[k]['img']+'.png';
            document.getElementById('menu'+k+'_audio').src = '../../pix/Sonidos/'+new_order[k]['son']+'.wav';
            document.getElementById('img_btn_'+k+'_1').src = '../../pix/animales/'+new_order[k]['opt1']+'.png';
            document.getElementById('img_btn_'+k+'_2').src = '../../pix/animales/'+new_order[k]['opt2']+'.png';
            primeraToma = Date.now();
        }
        new_order_nivel_3 = new_order;
        var url_string = window.location.href; 
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
    };
    /*
     * Guardar in array la respuesta y el tiempo, pasar al sigiente item y en el ultimo item enviar a guardar
     * @param {int} key
     * @param {int} opt
     * @returns {Generator}
     */
    onclik_respose(key, opt){
        new_order_nivel_3[key]['res_user'] = new_order_nivel_3[key]['opt'+opt];
        new_order_nivel_3[key]['time'] = rn3.medir_tiempo();
        var ultimo = (new_order_nivel_3.length)-1;
        document.getElementById('menu'+key+'_audio').pause();
        if(key < ultimo){
            position = key+1;
            if(key < 3){
                if(new_order_nivel_3[key]['res_user'] == new_order_nivel_3[key]['res']){
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-check"></i>';
                }else{
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-close"></i>';
                }
            }
            document.getElementById("tab_"+(key+1)).click();
            document.getElementById("menu"+(key+1)+'_audio').play();
            primeraToma = Date.now();
        }else{
            rn3.ajax_nivel_3();
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
    ajax_nivel_3(){
        var rv = {};
        for (var i = 0; i < new_order_nivel_3.length; ++i)
            rv[i] = Object.assign({}, new_order_nivel_3[i]);
        
        $.ajax({
            url : '../../methods/save_levels.php',
            data : {action: 3,user: user_id, data:JSON.stringify(rv),letra: 0},
            type : 'POST',
            success : function(json) {
                
            },
            error : function(result, textStatus, errorThrown) {
                
            },
            complete : function(json, status) {
                if(status != 'error'){                  
                    try {
                        var fjson = JSON.parse(json.responseText);
                        document.getElementById('instruccion').style.display = "block";
                        /*document.getElementById('resumen_nivel_3').innerHTML = '<h2>Sus respuestas:</h2>';
                        $.each(fjson, function(k,v){
                            var div_html='<div class="tok_no_selec">'+
                                            '<div class="resumen_opt">Opción 1: '+v.opt1+'</div>'+
                                            '<div class="resumen_opt">Opción 2: '+v.opt2+'</div>'+
                                            '<div class="resumen_opt">Su respuesta: '+v.response_user+'</div>';
                            if(v.response_user == v.res_correc){
                                div_html += '<i class="fa fa-fw fa-check"></i>';
                            }else{
                                div_html += '<i class="fa fa-fw fa-close"></i>';
                            }
                            div_html += '</div>';
                            document.getElementById('resumen_nivel_3').innerHTML += div_html;
                        });*/
                        document.getElementById('resumen_nivel_3').innerHTML ='<button type="button" class="button_ir" onclick="updateReloj_nivel('+user_id+',4)">Ir al nivel 4</button>';
                        document.getElementById('resumen_nivel_3').style.backgroundImage = "url(../../pix/Imagenes/nivel_4.png)";
                        document.getElementById('resumen_nivel_3').style.backgroundSize = "65%";
                        document.getElementById('resumen_nivel_3').style.backgroundRepeat  = "no-repeat";
                        document.getElementById('resumen_nivel_3').style.backgroundPosition = "top";
                        document.getElementById('resumen_nivel_3').style.height = "100%";
                        document.getElementById('resumen_nivel_3').style.position = "absolute";
                    } catch (e) {
                        
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
var rn3 = new random_nivel_3;
rn3.order_nivel_3();
document.onkeydown = rn3.compruebaTecla;
