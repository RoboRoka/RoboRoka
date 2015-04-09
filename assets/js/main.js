$( document ).ready(function(){
    var height = $(window).height()/2;
    var left = $('.hand-left');
    var right = $('.hand-right');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < height) {
            left.css({
                'transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)'
            });
            right.css({
                'transform': 'rotate(' + (scroll/3.90) + 'deg)'
            });
            $(".right-btn").css({
                'transform': 'translateX(' + (scroll/3.00) + 'px)'
            });
             $(".right-far-btn").css({
                'transform': 'translateX(' + (scroll/2.00) + 'px)'
            });
            $(".left-btn").css({
                'transform': 'translateX(' + (scroll/3.00)*(-1) + 'px)'
            });
            $(".left-far-btn").css({
                'transform': 'translateX(' + (scroll/2.00)*(-1) + 'px)'
            });

            $("#header").css({
                'transform': 'translateY(' + (scroll/8)*(-1) + 'px)'
            });

            $(".nav-btn").css({
                'transform': 'translateY(' + (scroll/16) + 'px)'
            });
        } 
    });  
}); 


            