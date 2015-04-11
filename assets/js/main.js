$( document ).ready(function(){
    var height = $(window).height()/2;
    var left = $('.hand-left');
    var right = $('.hand-right');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll < height) {
            left.css({
                '-ms-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
                'transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
                '-webkit-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
                '-moz-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)'
            });
            
            right.css({
                '-ms-transform': 'rotate(' + (scroll/3.90) + 'deg)',
                '-moz-transform': 'rotate(' + (scroll/3.90) + 'deg)',
                '-webkit-transform': 'rotate(' + (scroll/3.90) + 'deg)',
                'transform': 'rotate(' + (scroll/3.90) + 'deg)'
            });
            $(".right-btn").css({
                '-ms-transform': 'translateX(' + (scroll/3.00) + 'px)',
                '-webkit-transform': 'translateX(' + (scroll/3.00) + 'px)',
                '-moz-transform': 'translateX(' + (scroll/3.00) + 'px)',
                'transform': 'translateX(' + (scroll/3.00) + 'px)'
            });
             $(".right-far-btn").css({
                '-ms-transform': 'translateX(' + (scroll/2.00) + 'px)',
                '-moz-transform': 'translateX(' + (scroll/2.00) + 'px)',
                '-webkit-transform': 'translateX(' + (scroll/2.00) + 'px)',
                'transform': 'translateX(' + (scroll/2.00) + 'px)'
            });
            $(".left-btn").css({
                '-ms-transform': 'translateX(' + (scroll/3.00)*(-1) + 'px)',
                '-webkit-transform': 'translateX(' + (scroll/3.00)*(-1) + 'px)',
                '-moz-transform': 'translateX(' + (scroll/3.00)*(-1) + 'px)',
                'transform': 'translateX(' + (scroll/3.00)*(-1) + 'px)'
            });
            $(".left-far-btn").css({
                '-ms-transform': 'translateX(' + (scroll/2.00)*(-1) + 'px)',
                '-webkit-transform': 'translateX(' + (scroll/2.00)*(-1) + 'px)',
                '-moz-transform': 'translateX(' + (scroll/2.00)*(-1) + 'px)',
                'transform': 'translateX(' + (scroll/2.00)*(-1) + 'px)'
            });

            $("#header").css({
                '-ms-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
                '-moz-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
                '-webkit-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
                'transform': 'translateY(' + (scroll/8)*(-1) + 'px)'
            });

            $(".nav-btn").css({
                '-ms-transform': 'translateY(' + (scroll/16) + 'px)',
                '-moz-transform': 'translateY(' + (scroll/16) + 'px)',
                '-webkit-transform': 'translateY(' + (scroll/16) + 'px)',
                'transform': 'translateY(' + (scroll/16) + 'px)'
            });
        } 
    });  
}); 


            