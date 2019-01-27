
var nivel_2 = [];

nivel_2[0] = [];
nivel_2[0]['img'] = 'cerdo_a';
nivel_2[0]['son'] = 'buho_s';
nivel_2[0]['opt1'] = 'Buho';
nivel_2[0]['opt2'] = 'Cerdo';
nivel_2[0]['itm'] = 1;
nivel_2[0]['let'] =1;
nivel_2[0]['res'] = nivel_2[0]['opt2'];

nivel_2[1] = [];
nivel_2[1]['img'] = 'lobo_z';
nivel_2[1]['son'] = 'pollo_s';
nivel_2[1]['opt1'] = 'Pollo';
nivel_2[1]['opt2'] = 'Lobo';
nivel_2[1]['itm'] = 2;
nivel_2[1]['let'] =1;
nivel_2[1]['res'] = nivel_2[1]['opt1'];

nivel_2[2] = [];
nivel_2[2]['img'] = 'pollo_r';
nivel_2[2]['son'] = 'serpiente_s';
nivel_2[2]['opt1'] = 'Pollo';
nivel_2[2]['opt2'] = 'Serpiente';
nivel_2[2]['itm'] = 3;
nivel_2[2]['let'] =1;
nivel_2[2]['res'] = nivel_2[2]['opt1'];

nivel_2[3] = [];
nivel_2[3]['img'] = 'gato_v';
nivel_2[3]['son'] = 'lobo_s';
nivel_2[3]['opt1'] = 'Gato';
nivel_2[3]['opt2'] = 'Lobo';
nivel_2[3]['itm'] = 4;
nivel_2[3]['let'] =1;
nivel_2[3]['res'] = nivel_2[3]['opt2'];

nivel_2[4] = [];
nivel_2[4]['img'] = 'serpiente_v';
nivel_2[4]['son'] = 'perro_s';
nivel_2[4]['opt1'] = 'Serpiente';
nivel_2[4]['opt2'] = 'Perro';
nivel_2[4]['itm'] = 5;
nivel_2[4]['let'] =1;
nivel_2[4]['res'] = nivel_2[4]['opt2'];

nivel_2[5] = [];
nivel_2[5]['img'] = 'mono_a';
nivel_2[5]['son'] = 'serpiente_s';
nivel_2[5]['opt1'] = 'Mico';
nivel_2[5]['opt2'] = 'Serpiente';
nivel_2[5]['itm'] = 6;
nivel_2[5]['let'] =1;
nivel_2[5]['res'] = nivel_2[5]['opt1'];

nivel_2[6] = [];
nivel_2[6]['img'] = 'oveja_r';
nivel_2[6]['son'] = 'lobo_s';
nivel_2[6]['opt1'] = 'Lobo';
nivel_2[6]['opt2'] = 'Oveja';
nivel_2[6]['itm'] = 7;
nivel_2[6]['let'] =1;
nivel_2[6]['res'] = nivel_2[6]['opt2'];

nivel_2[7] = [];
nivel_2[7]['img'] = 'perro_v';
nivel_2[7]['son'] = 'buho_s';
nivel_2[7]['opt1'] = 'Buho';
nivel_2[7]['opt2'] = 'Perro';
nivel_2[7]['itm'] = 8;
nivel_2[7]['let'] =1;
nivel_2[7]['res'] = nivel_2[7]['opt1'];

nivel_2[8] = [];
nivel_2[8]['img'] = 'buho_r';
nivel_2[8]['son'] = 'serpiente_s';
nivel_2[8]['opt1'] = 'Buho';
nivel_2[8]['opt2'] = 'Serpiente';
nivel_2[8]['itm'] = 9;
nivel_2[8]['let'] =1;
nivel_2[8]['res'] = nivel_2[8]['opt1'];

nivel_2[9] = [];
nivel_2[9]['img'] = 'buho_z';
nivel_2[9]['son'] = 'oveja_s';
nivel_2[9]['opt1'] = 'Oveja';
nivel_2[9]['opt2'] = 'Buho';
nivel_2[9]['itm'] = 10;
nivel_2[9]['let'] =1;
nivel_2[9]['res'] = nivel_2[9]['opt1'];

nivel_2[10] = [];
nivel_2[10]['img'] = 'serpiente_a';
nivel_2[10]['son'] = 'mono_s';
nivel_2[10]['opt1'] = 'Mico';
nivel_2[10]['opt2'] = 'Serpiente';
nivel_2[10]['itm'] = 11;
nivel_2[10]['let'] =1;
nivel_2[10]['res'] = nivel_2[10]['opt2'];

nivel_2[11] = [];
nivel_2[11]['img'] = 'cerdo_z';
nivel_2[11]['son'] = 'oveja_s';
nivel_2[11]['opt1'] = 'Cerdo';
nivel_2[11]['opt2'] = 'Oveja';
nivel_2[11]['itm'] = 12;
nivel_2[11]['let'] =1;
nivel_2[11]['res'] = nivel_2[11]['opt1'];


var new_order_nivel_2; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id del usuario
var position = 0;
/*
 * 
 * @type type
 */
class random_nivel_2{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_nivel_2(){
        position = 0;
        var new_order = nivel_2.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../pix/Imagenes/'+new_order[k]['img']+'.png';
            document.getElementById('menu'+k+'_audio').src = '../pix/Sonidos/'+new_order[k]['son']+'.wav';
            document.getElementById('menu'+k+'_opt1').innerHTML = new_order[k]['opt1'];
            document.getElementById('menu'+k+'_opt2').innerHTML = new_order[k]['opt2'];
            primeraToma = Date.now();
        }
        new_order_nivel_2 = new_order;
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
        new_order_nivel_2[key]['res_user'] = new_order_nivel_2[key]['opt'+opt];
        new_order_nivel_2[key]['time'] = rn2.medir_tiempo();
        var ultimo = (new_order_nivel_2.length)-1;
        document.getElementById('menu'+key+'_audio').pause();
        if(key < ultimo){
            position = key+1;
            if(key < 3){
                if(new_order_nivel_2[key]['res_user'] == new_order_nivel_2[key]['res']){
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-check"></i>';
                }else{
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-close"></i>';
                }
            }
            document.getElementById("tab_"+(key+1)).click();
            document.getElementById("menu"+(key+1)+'_audio').play();
            primeraToma = Date.now();
        }else{
            rn2.ajax_nivel_2();
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
    ajax_nivel_2(){
        var rv = {};
        for (var i = 0; i < new_order_nivel_2.length; ++i)
            rv[i] = Object.assign({}, new_order_nivel_2[i]);
        
        $.ajax({
            url : '../methods/save_levels.php',
            data : {action: 2,user: user_id, data:JSON.stringify(rv),letra: 1},
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
                        /*document.getElementById('resumen_nivel_2').innerHTML = '<h2>Sus respuestas:</h2>';
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
                            document.getElementById('resumen_nivel_2').innerHTML += div_html;
                        });*/
                        document.getElementById('resumen_nivel_2').innerHTML ='<button type="button" class="button_ir" onclick="updateReloj_nivel('+user_id+',3)">Ir al nivel 3</button>';
                        document.getElementById('resumen_nivel_2').style.backgroundImage = "url(../pix/Imagenes/nivel_3.png)";
                        document.getElementById('resumen_nivel_2').style.backgroundSize = "65%";
                        document.getElementById('resumen_nivel_2').style.backgroundRepeat  = "no-repeat";
                        document.getElementById('resumen_nivel_2').style.backgroundPosition = "top";
                        document.getElementById('resumen_nivel_2').style.height = "100%";
                        document.getElementById('resumen_nivel_2').style.position = "absolute";
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
var rn2 = new random_nivel_2;
rn2.order_nivel_2();
document.onkeydown = rn2.compruebaTecla;
