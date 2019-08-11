//*****refresh scroll on top*****//
//$(document).ready(function(){
//  $(this).scrollTop(0);
//});
//*****scroll to div*****///
//*****nav color change*****//
$(document).ready(function () {

    $(document).on("scroll", onScroll);
    $('#myNav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#myNav a').each(function () {
            $(this).removeClass('active');
        })

        $('#mySideNav a').each(function () {
            $("header nav .sidenav").toggleClass("show");
            $(".hamburger").toggleClass("is-active");
        })

        $(this).addClass('active');

        var target = this.hash,
            nav = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('#mySideNav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#mySideNav a').each(function () {
            $("header nav .sidenav").toggleClass("show");
            $(".hamburger").toggleClass("is-active");
        })

        $(this).addClass('active');

        var target = this.hash,
            nav = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#myNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#myNav .nav li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
//*****TOGGLE SIDENAV*****//
  $(".sideNav-btn").click(function() {
    $(this).toggleClass("show");
    $("header nav .sidenav").toggleClass("show");
  });
//*****HAMBUGER ANIMATION*****/
  var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
  });

//*****ARROW DOWN*****//
  $(".next-arrow").click(function (){
      $('html, body').animate({
          scrollTop: $($(this).attr("href")).offset().top
      }, 800);
  });

//*****Scroll to top*****//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() < 6855) {
            $('.scrolltop-holder .scrollup').css('bottom', '50px');
        } else {
            $('.scrolltop-holder .scrollup').css('bottom', '50px');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 800);
        return false;
    });

});

//*****On scroll functions*****//
$(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    //*****Navigation opacity*****//
    if (scrollTop > 20) {
        $("header nav").css('background-color', '#070707');
        $("header nav").css('opacity', .8);
        $("header nav").css('transition', 'ease 800ms');
        $(".navbar .navbar-collapse ul").css('top', 0);
        $(".navbar .navbar-collapse ul").css('transition', 'ease 0.5s');
    } else {
        $("header nav").css('background-color', 'transparent');
        $("header nav").css('transition', 'ease 800ms');
        $(".navbar .navbar-collapse ul").css('top', 145);
        $(".navbar .navbar-collapse ul").css('transition', 'ease 0.5s');
    }

    if (scrollTop > $(".about-me").height()/3) {
      $(".about-me .avatar-holder .imgs").css("opacity", 1);
      $(".about-me .avatar-holder .imgs").css("transition", "all .3s ease-in-out");
    }

    //*****skill progress animation*****//
    if (scrollTop > $(".about-me").offset().top + ($(window).height()/5)) {
        $('.about-me .skill-holder .skill .progressBarContainer').each(function(){
          $(this).find('.progressBarValue').animate({
            width:$(this).attr('data-percent')
          }, 2000);
        });
    } else {
      return false;
    }
});
