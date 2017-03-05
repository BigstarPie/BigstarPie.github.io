$(function(){
    $('#toCH256').on('click', function(){
        $('#main').load('../product/ch256.html');
        $('html, body').animate({scrollTop: $('#main').offset().top},'slow');
        // var test = $.get('../product/ch256.html');
        // console.log(test);
        // $('#main').html(test.responseText);
    });

});