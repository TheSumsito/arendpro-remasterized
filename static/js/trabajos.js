$(document).ready(function (){
    $('.container-trabajos .contenido .oleo').addClass('remove');
    $('.container-trabajos .contenido .caja-decorativa').addClass('remove');
    $('.container-trabajos .contenido .retratos').addClass('remove');
    $('.container-trabajos .contenido .cuadros').addClass('remove');

    document.getElementById('crewuel').onclick = function (){
        $('.container-trabajos .contenido .crewuel').removeClass('remove');

        $('.container-trabajos .contenido .oleo').addClass('remove');
        $('.container-trabajos .contenido .caja-decorativa').addClass('remove');
        $('.container-trabajos .contenido .retratos').addClass('remove');
        $('.container-trabajos .contenido .cuadros').addClass('remove');
    }

    document.getElementById('oleo').onclick = function (){
        $('.container-trabajos .contenido .oleo').removeClass('remove');

        $('.container-trabajos .contenido .crewuel').addClass('remove');
        $('.container-trabajos .contenido .caja-decorativa').addClass('remove');
        $('.container-trabajos .contenido .retratos').addClass('remove');
        $('.container-trabajos .contenido .cuadros').addClass('remove');
    }

    document.getElementById('cajas').onclick = function (){
        $('.container-trabajos .contenido .caja-decorativa').removeClass('remove');

        $('.container-trabajos .contenido .crewuel').addClass('remove');
        $('.container-trabajos .contenido .oleo').addClass('remove');
        $('.container-trabajos .contenido .retratos').addClass('remove');
        $('.container-trabajos .contenido .cuadros').addClass('remove');
    }

    document.getElementById('retratos').onclick = function (){
        $('.container-trabajos .contenido .retratos').removeClass('remove');

        $('.container-trabajos .contenido .crewuel').addClass('remove');
        $('.container-trabajos .contenido .oleo').addClass('remove');
        $('.container-trabajos .contenido .caja-decorativa').addClass('remove');
        $('.container-trabajos .contenido .cuadros').addClass('remove');
    }

    document.getElementById('cuadros').onclick = function (){
        $('.container-trabajos .contenido .cuadros').removeClass('remove');

        $('.container-trabajos .contenido .crewuel').addClass('remove');
        $('.container-trabajos .contenido .oleo').addClass('remove');
        $('.container-trabajos .contenido .caja-decorativa').addClass('remove');
        $('.container-trabajos .contenido .retratos').addClass('remove');
    }
});