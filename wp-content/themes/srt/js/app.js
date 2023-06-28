console.log('app.js loaded!');

/*Detect distance scrolled from top*/
/*jQuery(document).ready(function ($) {
 $(document).scroll(function () {
 console.log($(document).scrollTop());
 })
 });*/


/*Fade In Animation*/
jQuery(window).load(function () {
  jQuery('.fade-in-animation').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
  jQuery('#mega_main_menu').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
  jQuery('#mega_main_menu_ul').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
  jQuery('.mobile_button').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
  jQuery('.menu-item').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
  jQuery('.site-container').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
});

/*Sticky Menu*/
jQuery(document).ready(function ($) {
  var header = $('.site-header');
  header.scrollFix({
    fixTop: 0,
    fixOffset: 1
  });
});


/*Move to top*/
jQuery(document).ready(function ($) {
  $('#move-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  });
  $('#move-top-wrapper').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  });
});

/*Home Page Slider*/
jQuery(document).ready(function ($) {
  var homeslider = $('.home-slider');
  homeslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    /*asNavFor: '.home-slider-thumb',*/
    focusOnSelect: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });
  /* $('.home-slider-thumb').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.home-slider',
     dots: true,
     focusOnSelect: true
   });*/

  /*var homesliderthumbslide = $('.home-slider-thumb .slick-slide');
  // Remove active class from all thumbnail slides
  homesliderthumbslide.removeClass('slick-active');

  // Set active class to first thumbnail slides
  homesliderthumbslide.eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  homeslider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    homesliderthumbslide.removeClass('slick-active');
    homesliderthumbslide.eq(mySlideNumber).addClass('slick-active');
  });*/
});


/*Home Page News Slider*/
jQuery(document).ready(function ($) {
  $('.news-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: '0',
    focusOnSelect: false,
    arrows: true,
    dots: true,
    prevArrow: '.block4-news-wrapper .prev-btn',
    nextArrow: '.block4-news-wrapper .next-btn',
    appendDots: '.block4-news-wrapper .slider-navigation .dots',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          dots: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false
        }
      }
    ]
  });
});


/* Header Language Selector*/
jQuery(document).ready(function ($) {
  var flag = $(".dropdown img.flag");
  flag.addClass("flagvisibility");
  $(".dropdown dt a").click(function () {
    $(".dropdown dd ul").slideToggle('slow');
  });
  $(".dropdown dd ul li a").click(function () {
    var text = $(this).html();
    $(".dropdown dt a").html(text);
    $(".dropdown dd ul").slideUp();
  });
  /*function getSelectedValue(id) {
   return $("#" + id).find("dt a span.value").html();
   }*/
  $(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
      $(".dropdown dd ul").slideUp();
  });
  flag.toggleClass("flagvisibility");
});


/**/
/*jQuery(document).ready(function ($) {
 $('#menu-item-7').unbind('click');
 });*/


/*Category Page Slider*/
jQuery(document).ready(function ($) {
  $('#category-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });
});


/*Single Technology&Systems Product Slider*/
jQuery(document).ready(function ($) {
  var slidernav = $('.slider-image-tech');
  slidernav.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-image-nav',
    lazyLoad: 'progressive',
    mobileFirst: true
  });

  var slidenumber = slidernav.slick("getSlick").slideCount;
  if (slidenumber < 5) {
    $('.slider-image-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-image-tech',
      centerMode: false,
      centerPadding: '0px',
      focusOnSelect: true,

      arrows: false,
      dots: false,
      prevArrow: '.product-image-slider .prev-btn',
      nextArrow: '.product-image-slider .next-btn',
      appendDots: '.product-image-slider .slider-navigation .dots',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
    $('.slider-navigation').hide();
  } else {
    $('.slider-image-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-image-tech',
      centerMode: false,
      centerPadding: '0px',
      focusOnSelect: true,

      arrows: true,
      dots: true,
      prevArrow: '.product-image-slider .prev-btn',
      nextArrow: '.product-image-slider .next-btn',
      appendDots: '.product-image-slider .slider-navigation .dots',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            autoplay: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }

  slidernav.slickLightbox({
    src: 'data-prod-src',
    itemSelector: '.slider-image-slide-thumb img',
    background: 'rgba(89,111,117,.9)'
  });

});

/*Single Accessories Slider*/
jQuery(document).ready(function ($) {
  $('.accessories-slider-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    arrows: false,
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


/*Single Case Studies Slider*/
jQuery(document).ready(function ($) {
  $('.case-studies-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: false,
    arrows: true,
    dots: true,
    prevArrow: '.case-prev-btn',
    nextArrow: '.case-next-btn',
    appendDots: '.case-slider-navigation .dots',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


/* Single Product Image Slider*/
jQuery(document).ready(function ($) {
  var slidernav = $('.slider-image');
  slidernav.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    lazyLoad: 'progressive',
    mobileFirst: true
  });


  var slidenumber = slidernav.slick("getSlick").slideCount;
  if (slidenumber < 5) {
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-image',
      centerMode: false,
      centerPadding: '0px',
      focusOnSelect: true,
      arrows: false,
      dots: false,
      prevArrow: '.block3-product-image-slider .prev-btn',
      nextArrow: '.block3-product-image-slider .next-btn',
      appendDots: '.block3-product-image-slider .slider-navigation .dots',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
    $('.slider-navigation').hide();
  } else {
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-image',
      centerMode: false,
      centerPadding: '0px',
      focusOnSelect: true,

      arrows: true,
      dots: true,
      prevArrow: '.block3-product-image-slider .prev-btn',
      nextArrow: '.block3-product-image-slider .next-btn',
      appendDots: '.block3-product-image-slider .slider-navigation .dots',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }

  slidernav.slickLightbox({
    src: 'data-prod-src',
    itemSelector: '.slider-image-slide-thumb img',
    background: 'rgba(89,111,117,.9)'
  });

  /*var slickdots = $(".slider-nav .slick-dots");
   slickdots.prepend("<div class='prev-btn'></div>");
   slickdots.append("<div class='next-btn'></div>");

   $('.slider-nav .slick-dots .next-btn').click(function () {
   $('.slider-nav').slick('slickNext');
   });
   $('.slider-nav .slick-dots .prev-btn').click(function () {
   $('.slider-nav').slick('slickPrev');
   });*/

});


/*Press Releases Listing Page Slider*/
jQuery(document).ready(function ($) {
  var slider = $('.slider');
  var pagination = $('.slider-pagination');
  var slidenext = $('#next');
  var slideprev = $('#prev');


  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-pagination',
    lazyLoad: 'progressive',
    mobileFirst: true,
    adaptiveHeight: true
  });
  /*console.log(slider.slick("getSlick").slideCount);*/
  var slidenumber = slider.slick("getSlick").slideCount;
  if (slidenumber < 3) {
    pagination.hide();
    slidenext.hide();
    slideprev.hide();
  } else {
    pagination.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      asNavFor: '.slider',
      centerMode: false,
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 334,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  slider.on('afterChange', function (slickSlide, i) {
    pagination.removeClass('slick-active');
    pagination.eq(i).addClass('slick-active');
  });
  slidenext.click(function () {
    slider.slick('slickNext');
  });
  slideprev.click(function () {
    slider.slick('slickPrev');
  });
});


/*About Tabbed Navigation*/
jQuery(document).ready(function ($) {
  $(".tab-content").hide();
  $(".tab-content:first").show();
  var tabs_ul_li = $('ul.tabs li');
  tabs_ul_li.click(function () {
    $(".tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab-drawer-heading").removeClass("d-active");
    $(".tab-drawer-heading[rel^='" + activeTab + "']").addClass("d-active");
  });
  $(".tab-drawer-heading").click(function () {

    $('.corporate-governance-block4').hide();
    $('.corporate-governance-block3').css('padding-bottom', '120px');

    $(".tab-content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab-drawer-heading").removeClass("d-active");
    $(this).addClass("d-active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
  });
  tabs_ul_li.last().addClass("tab-last");
  $('.corporate-governance-block4').hide();
  $('.corporate-governance-block3').css('padding-bottom', '120px');

  $(".tabs li").click(function () {
    $('.corporate-governance-block4').hide();
    $('.corporate-governance-block3').css('padding-bottom', '120px');
  });
  $(".tab-last").click(function () {
    if ($(".tab-last").hasClass("active")) {
      $('.corporate-governance-block4').show(500);
      $('.corporate-governance-block3').css('padding-bottom', '0');
    }
  });


  $(".tab-drawer-heading[rel=tab4]").click(function () {
    if ($(".tab-drawer-heading").hasClass("d-active")) {
      $('.corporate-governance-block4').show(500);
      $('.corporate-governance-block3').css('padding-bottom', '0');
    }
  });
});


/*Counter Up Investors Page*/
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.share-change').delay(1500).queue(function (next) {
    $(this).css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
    next();
  });
  $('.share-delay').delay(2000).queue(function (next) {
    $(this).css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 'slow');
    next();
  });
});


/*Header Search lightbox*/
/*jQuery(document).ready(function ($) {
  $('.header-search a[data-rel^=lightcase]').lightcase({
    swipe: true,
    inline: {
      width: 'auto',
      height: 'auto'
    }
  });
});*/

/*Quick Downloads video lightbox*/
jQuery(document).ready(function ($) {
  $('a[data-rel^=lightcase]').lightcase({
    swipe: true,
    showSequenceInfo: false,
    showCaption: false,
    iframe: {
      allowfullscreen: 1
    },
    maxWidth: 1170,
    maxHeight: 1200
  });
});


/*News Webcast Lightbox*/
jQuery(document).ready(function ($) {
  $('.webcast-video-wrapper').lightcase({
    swipe: true,
    showSequenceInfo: false,
    showCaption: false,
    iframe: {
      allowfullscreen: 1
    },
    maxWidth: 1170,
    maxHeight: 1200,
    video: {
      width: 850,
      height: 480,
      preload: 'auto',
      controls: true,
      autobuffer: true,
      autoplay: true,
      loop: false

    },
    typeMapping: {
      'video': 'mp4,webm'
    }
  });
});


/*News Webcast Slider*/
jQuery(document).ready(function ($) {
  $('.webcast-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    fade: false,
    centerPadding: '0',
    focusOnSelect: false,
    arrows: true,
    dots: true,
    prevArrow: '.webcast-slider-navigation .webcast-prev-btn',
    nextArrow: '.webcast-slider-navigation .webcast-next-btn',
    appendDots: '.webcast-slider-navigation .dots',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
    ]
  });
});

/*All Downloads PopUp*/
jQuery(document).ready(function ($) {
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    closeOnBgClick: true,
    mainClass: 'mfp-fade'
  });
});

/*Case Studies Listing*/
jQuery(document).ready(function ($) {
  jQuery(".page-id-553 .esg-entry-cover").hover(function (event) {
    $(this).parent().closest('div').find('.esg-media-poster').addClass("esg-media-poster-hover");
    $(this).parent().closest('div').find('.esg-media-poster').css({opacity: 1});

    event.stopPropagation();
  }, function (event) {
    $(this).parent().closest('div').find('.esg-media-poster').removeClass("esg-media-poster-hover");
    event.stopPropagation();
  });
});

/*Market Briefs Listing*/
jQuery(document).ready(function ($) {
  jQuery(".page-id-8420 .esg-entry-cover").hover(function (event) {
    $(this).parent().closest('div').find('.esg-media-poster').addClass("esg-media-poster-hover");
    $(this).parent().closest('div').find('.esg-media-poster').css({opacity: 1});

    event.stopPropagation();
  }, function (event) {
    $(this).parent().closest('div').find('.esg-media-poster').removeClass("esg-media-poster-hover");
    event.stopPropagation();
  });
});

/*Mega Drop Down Menu Mobile*/
jQuery(document).ready(function ($) {
  $('#menu-mobile').slicknav({
    label: '',
    duration: 500,
    /* easingOpen: "easeOutBounce",*/ //available with jQuery UI
    closedSymbol: '<div class="slicknav-closed-arrow"></div>',
    openedSymbol: '<div class="slicknav-opened-arrow"></div>'
  });
});