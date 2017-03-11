$(function(){
    $('#toCH256').on('click', function(){
        $('#main').load('../product/ch256.html');
        $('html, body').animate({scrollTop: $('#main').offset().top},'slow');
    });

    $('#modelizationService').on('click', function(){
        $('#main').load('../product/modelizationService.html');
        $('html, body').animate({scrollTop: $('#main').offset().top},'slow');
    });

});