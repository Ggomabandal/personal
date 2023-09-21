$(document).ready(function(){
// portfolio
    $('.gallery ul li a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery ul li a").click(function() {
         $('html, body').animate({
             scrollTop: parseInt($("#portfolio").offset().top)
         }, 400);
    });
    let n;
    $(".gallery ul li a").click(function(){
        n=$(this).parents("li").index();
        console.log(n);
        $('#item0'+n+' >.row').children("img").remove();
        // 클릭한 이미지를 복제해서 추가하시오
        $(this).children().clone().appendTo('#item0'+n+' >.row');
    });
});