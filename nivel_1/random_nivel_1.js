/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nivel_1 = [];


nivel_1[0] = [];
nivel_1[0]['img'] = 'perro_r';
nivel_1[0]['son'] = 'gato_s';
nivel_1[0]['opt1'] = 'Gato';
nivel_1[0]['opt2'] = 'Perro';
nivel_1[0]['itm'] = 1;
nivel_1[0]['let'] =1;
nivel_1[0]['res'] = nivel_1[0]['opt2'];

nivel_1[1] = [];
nivel_1[1]['img'] = 'gallo_a';
nivel_1[1]['son'] = 'rana_s';
nivel_1[1]['opt1'] = 'Gallo';
nivel_1[1]['opt2'] = 'Rana';
nivel_1[1]['itm'] = 2;
nivel_1[1]['let'] =1;
nivel_1[1]['res'] = nivel_1[1]['opt2'];

nivel_1[2] = [];
nivel_1[2]['img'] = 'vaca_a';
nivel_1[2]['son'] = 'caballo_s';
nivel_1[2]['opt1'] = 'Vaca';
nivel_1[2]['opt2'] = 'Caballo';
nivel_1[2]['itm'] = 3;
nivel_1[2]['let'] =1;
nivel_1[2]['res'] = nivel_1[2]['opt2'];

nivel_1[3] = [];
nivel_1[3]['img'] = 'gato_r';
nivel_1[3]['son'] = 'lobo_s';
nivel_1[3]['opt1'] = 'Gato';
nivel_1[3]['opt2'] = 'Lobo';
nivel_1[3]['itm'] = 4;
nivel_1[3]['let'] =1;
nivel_1[3]['res'] = nivel_1[3]['opt1'];

nivel_1[4] = [];
nivel_1[4]['img'] = 'elefante_a';
nivel_1[4]['son'] = 'leon_s';
nivel_1[4]['opt1'] = 'Leon';
nivel_1[4]['opt2'] = 'Elefante';
nivel_1[4]['itm'] = 5;
nivel_1[4]['let'] =1;
nivel_1[4]['res'] = nivel_1[4]['opt1'];

nivel_1[5] = [];
nivel_1[5]['img'] = 'lobo_r';
nivel_1[5]['son'] = 'vaca_s';
nivel_1[5]['opt1'] = 'Vaca';
nivel_1[5]['opt2'] = 'Lobo';
nivel_1[5]['itm'] = 6;
nivel_1[5]['let'] =1;
nivel_1[5]['res'] = nivel_1[5]['opt2'];

nivel_1[6] = [];
nivel_1[6]['img'] = 'gallina_a';
nivel_1[6]['son'] = 'perro_s';
nivel_1[6]['opt1'] = 'Gallina';
nivel_1[6]['opt2'] = 'Perro';
nivel_1[6]['itm'] = 7;
nivel_1[6]['let'] =1;
nivel_1[6]['res'] = nivel_1[6]['opt2'];

nivel_1[7] = [];
nivel_1[7]['img'] = 'caballo_a';
nivel_1[7]['son'] = 'elefante_s';
nivel_1[7]['opt1'] = 'Elefante';
nivel_1[7]['opt2'] = 'Caballo';
nivel_1[7]['itm'] = 8;
nivel_1[7]['let'] =1;
nivel_1[7]['res'] = nivel_1[7]['opt1'];


var new_order_nivel_1; //nuevo orden del array de la fase uno
var primeraToma; //tiempo de inicio de casa item de la fase uno
var user_id; // id del usuario
var position = 0;
/*
 * 
 * @type type
 */
class random_nivel_1{
    /*
     * Hacer aleatorio los items de la fase uno
     * @returns {Generator}
     */
    order_nivel_1(){
        position = 0;
        var new_order = nivel_1.sort(function() {return Math.random() - 0.5});
        for(var k in new_order){
            document.getElementById('menu'+k+'_color').src = '../pix/Imagenes/'+new_order[k]['img']+'.png';
            document.getElementById('menu'+k+'_audio').src = '../pix/Sonidos/'+new_order[k]['son']+'.wav';
            document.getElementById('menu'+k+'_opt1').innerHTML = new_order[k]['opt1'];
            document.getElementById('menu'+k+'_opt2').innerHTML = new_order[k]['opt2'];
            primeraToma = Date.now();
        }
        new_order_nivel_1 = new_order;
        var url_string = window.location.href; 
        var url = new URL(url_string);
        user_id = url.searchParams.get("id_user");
        document.getElementById("menu0_audio").play();
        console.log('aqui',document.getElementById("menu0_audio"));
    };
    /*
     * Guardar in array la respuesta y el tiempo, pasar al sigiente item y en el ultimo item enviar a guardar
     * @param {int} key
     * @param {int} opt
     * @returns {Generator}
     */
    onclik_respose(key, opt){
        new_order_nivel_1[key]['res_user'] = new_order_nivel_1[key]['opt'+opt];
        new_order_nivel_1[key]['time'] = rn1.medir_tiempo();
        var ultimo = (new_order_nivel_1.length)-1;
        document.getElementById('menu'+key+'_audio').pause();
        if(key < ultimo){
            position = key+1;
            if(key < 3){
                if(new_order_nivel_1[key]['res_user'] == new_order_nivel_1[key]['res']){
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-check"></i>';
                }else{
                    document.getElementById('menu'+key+'_color').innerHTML = '<i class="fa fa-fw fa-close"></i>';
                }
            }
                
            document.getElementById("tab_"+(key+1)).click();
            document.getElementById("menu"+(key+1)+'_audio').play();
            primeraToma = Date.now();
        }else{
            rn1.ajax_nivel_1();
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
    ajax_nivel_1(){
        var rv = {};
        for (var i = 0; i < new_order_nivel_1.length; ++i)
            rv[i] = Object.assign({}, new_order_nivel_1[i]);
        
        $.ajax({
            url : '../methods/save_levels.php',
            data : {action: 1,user: user_id, data:JSON.stringify(rv),letra: 1},
            type : 'POST',
            success : function(json) {
                
            },
            error : function(result, textStatus, errorThrown) {
                console.log('Error al guardar');
            },
            complete : function(json, status) {
                if(status != 'error'){                  
                    try {
                        var fjson = JSON.parse(json.responseText);
                        document.getElementById('instruccion').style.display = "block";
                        /*document.getElementById('resumen_nivel_1').innerHTML = '<h2>Sus respuestas:</h2>';
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
                            document.getElementById('resumen_nivel_1').innerHTML += div_html;
                        });*/
                        document.getElementById('resumen_nivel_1').innerHTML ='<button type="button" class="button_ir" onclick="updateReloj_nivel('+user_id+',2)">Ir al nivel 2</button>';
                        document.getElementById('resumen_nivel_1').style.backgroundImage = "url(../pix/Imagenes/nivel_2.png)";
                        document.getElementById('resumen_nivel_1').style.backgroundSize = "65%";
                        document.getElementById('resumen_nivel_1').style.backgroundRepeat  = "no-repeat";
                        document.getElementById('resumen_nivel_1').style.backgroundPosition = "top";
                        document.getElementById('resumen_nivel_1').style.height = "100%";
                        document.getElementById('resumen_nivel_1').style.position = "absolute";
                    } catch (e) {
                        document.getElementById('resumen_nivel_1').innerHTML = '<h2>Hubo un error al guardar</h2><div>'+json.responseText+'</div>';
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
var rn1 = new random_nivel_1;
rn1.order_nivel_1();
document.onkeydown = rn1.compruebaTecla;
