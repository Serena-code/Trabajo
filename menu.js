$(document).ready(main);
/*Cuando el doc este listo vamos a ejecutar la funcion main */

var contador = 1 ;

function main(){
    $('.menu_bar').click(function(){
        if(contador==1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });
}