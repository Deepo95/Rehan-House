$(document).ready(function(){
});

$(document).ready(function() {

    $('.cart-icon').click(function() {
        $('.cart-list').toggleClass('visible');
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });

});