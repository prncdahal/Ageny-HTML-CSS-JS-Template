

/*
 *   Neplogics
 *   Written by Ramesh Dahal (prncdahal@gmail.com),
 *   neploagics.com
 */

jQuery(document).ready(function ($) {

   $('.toggle-menu').jPushMenu();
  $('body').animate({"opacity":'1'},300);
     
 


  
    /* Define some vars */
    var win = $(window),
        typer=$('.typer'),
        body = $('body'),
        indexLogo=$('.index-logo'),
        siteHeader = $('.header');

    /* Smooth scroll */

    $('a.scroll-link').on('click',function(ss){
        var scrollEle=$(this).data('scroll'),
            scrollPos=$(this).data('pos'),
            scrollSpeed=$(this).data('scrollspeed');
       ss.preventDefault();
        if($(scrollEle).length){

           $('html, body').animate({
            scrollTop: $(scrollEle).offset().top+(scrollPos)
              }, scrollSpeed);
        }
    });


   
 
/*header scroll*/
  if(indexLogo.length){
  $(window).scroll(function() {
    if($(this).scrollTop() > 80) {
  siteHeader.stop().animate({"top":"0px"},500);
           $('.direction-arrow .forward-btn,.index-logo').fadeOut('fast');
    } else {
    siteHeader.stop().animate({"top":"-100px"},500);

          $('.direction-arrow .forward-btn,.index-logo').fadeIn('slow');
    }
  });

    }
     $('.scroll-top').stop(true,true).fadeOut('fast');
   $(window).scroll(function() {
    if($(this).scrollTop() < 120) {
 
           $('.scroll-top').stop(true,true).fadeOut('fast');
    } else {


          $('.scroll-top').stop(true,true).fadeIn('slow');
    }
  });
 
   //category-nav-links toggle
$('.category-nav-links').hide();
$('.category-nav-btn a').on('click',function(){
  $('.category-nav-links').slideToggle();
  $('.category-nav-btn a em').toggleClass('fa-angle-up');
});


    // The slider being synced must be initialized first
  $('.project-view-nav #carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 90,
    itemMargin: 4,
    asNavFor: '#slider',
     directionNav: false,
     maxItems: 4,
     start: function(){

     }

  });
 
  $('.project-view #slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
     directionNav: false

  });
 
   var $container = jQuery('.portfolioContainer');
    $container.isotope({
        filter: '*',
     
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          
        }
    });

    jQuery('.portfolioFilter a').click(function(){
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
          
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
                
            }
         });
         return false;
    }); 


});//jquery ends here

/* particle js config (json): */
particlesJS('para-logic',
    {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
 /* ========================================================================
    Testimonial Carousel
   ========================================================================== */