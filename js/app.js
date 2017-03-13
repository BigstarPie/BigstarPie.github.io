$(function(){
    $('#toCH256').on('click', function(){
        $('#main').load('../product/ch256.html');
        $('html, body').animate({scrollTop: $('#main').offset().top},'slow');
    });

    // $('#modelizationService').on('click', function(){
    //     $('#main').load('../product/modelizationService.html');
    //     $('html, body').animate({scrollTop: $('#main').offset().top},'slow');
    // });

    // $('a[href="#modelizationService"]').on('click', function () {
    //     $('#main').hide();
    //     $('#modelizationService').show();
    // });

    // $('a').on('click', function(){
    //     if($(this).attr('href')!== '#modelizationService'){
    //         $('#main').show();
    //         $('#modelizationService').hide();
    //     } else{
    //         $('#main').hide();
    //         $('#modelizationService').show();
    //     }
    // });
});