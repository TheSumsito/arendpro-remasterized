$(document).ready(function (){
    //$('.container-trabajos .contenido .crewuel').css({'display':'none'});
    $('.container-trabajos .contenido .oleo').css({'display':'none'});
    $('.container-trabajos .contenido .caja-decorativa').css({'display':'none'});
    $('.container-trabajos .contenido .retratos').css({'display':'none'});
    $('.container-trabajos .contenido .cuadros').css({'display':'none'});
    document.getElementById('crewuel').onclick = function (){
        $('.container-trabajos .contenido .crewuel').css({'display':'grid'});

        $('.container-trabajos .contenido .oleo').css({'display':'none'});
        $('.container-trabajos .contenido .caja-decorativa').css({'display':'none'});
        $('.container-trabajos .contenido .retratos').css({'display':'none'});
        $('.container-trabajos .contenido .cuadros').css({'display':'none'});
    }

    document.getElementById('oleo').onclick = function (){
        $('.container-trabajos .contenido .oleo').css({'display':'grid'});

        $('.container-trabajos .contenido .crewuel').css({'display':'none'});
        $('.container-trabajos .contenido .caja-decorativa').css({'display':'none'});
        $('.container-trabajos .contenido .retratos').css({'display':'none'});
        $('.container-trabajos .contenido .cuadros').css({'display':'none'});
    }

    document.getElementById('cajas').onclick = function (){
        $('.container-trabajos .contenido .caja-decorativa').css({'display':'grid'});

        $('.container-trabajos .contenido .crewuel').css({'display':'none'});
        $('.container-trabajos .contenido .oleo').css({'display':'none'});
        $('.container-trabajos .contenido .retratos').css({'display':'none'});
        $('.container-trabajos .contenido .cuadros').css({'display':'none'});
    }

    document.getElementById('retratos').onclick = function (){
        $('.container-trabajos .contenido .retratos').css({'display':'grid'});

        $('.container-trabajos .contenido .crewuel').css({'display':'none'});
        $('.container-trabajos .contenido .oleo').css({'display':'none'});
        $('.container-trabajos .contenido .caja-decorativa').css({'display':'none'});
        $('.container-trabajos .contenido .cuadros').css({'display':'none'});
    }

    document.getElementById('cuadros').onclick = function (){
        $('.container-trabajos .contenido .cuadros').css({'display':'grid'});

        $('.container-trabajos .contenido .crewuel').css({'display':'none'});
        $('.container-trabajos .contenido .oleo').css({'display':'none'});
        $('.container-trabajos .contenido .caja-decorativa').css({'display':'none'});
        $('.container-trabajos .contenido .retratos').css({'display':'none'});
    }
});