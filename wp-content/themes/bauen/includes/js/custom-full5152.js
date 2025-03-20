jQuery(function() {
    "use strict";
    var wind = jQuery(window);
	// Main footer 
    var footer = jQuery("footer").outerHeight();
    jQuery("main").css("marginBottom", footer);
    

    // Burger Menu 
    var burgerMenu = function () {
        jQuery('.js-bauen-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var jQuerythis = jQuery(this);
            if (jQuery('body').hasClass('offcanvas')) {
                jQuerythis.removeClass('active');
                jQuery('body').removeClass('offcanvas');
            }
            else {
                jQuerythis.addClass('active');
                jQuery('body').addClass('offcanvas');
            }
        });
    };
    
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        jQuery(document).click(function (e) {
            var container = jQuery("#bauen-aside, .js-bauen-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if (jQuery('body').hasClass('offcanvas')) {
                    jQuery('body').removeClass('offcanvas');
                    jQuery('.js-bauen-nav-toggle').removeClass('active');
                }
            }
        });
        jQuery(window).scroll(function () {
            if (jQuery('body').hasClass('offcanvas')) {
                jQuery('body').removeClass('offcanvas');
                jQuery('.js-bauen-nav-toggle').removeClass('active');
            }
        });
    };
    
    // Sub Menu 
    jQuery('.bauen-main-menu li.bauen-sub>a').on('click', function () {
        jQuery(this).removeAttr('href');
        var element = jQuery(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    jQuery('.bauen-main-menu>ul>li.bauen-sub>a').append('<span class="holder"></span>');
    
    // Document on load.
    jQuery(function () {
        burgerMenu();
        mobileMenuOutsideClick();
    });
    
    var wind = jQuery(window);
    // ScrollIt 
    jQuery.scrollIt({
        upKey: 38
        , downKey: 40
        , easing: 'swing'
        , scrollTime: 600
        , activeClass: 'active'
        , onPageChange: null
        , topOffset: -70
    });
    
    // Navbar scrolling background 
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop()
            , navbar = jQuery(".navbar")
            , logo = jQuery(".navbar:not(.nav-box) .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
        else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    jQuery(".navbar-nav .dropdown-item:not(.menu-item-has-children) a").on('click', function () {
        jQuery(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function(indx){
        if (jQuery(this).attr("data-background")){
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
		if (jQuery(this).attr("data-position")){
            jQuery(this).css("background-position", "" + jQuery(this).data("position") + "");
        }
		if (jQuery(this).attr("data-size")){
            jQuery(this).css("background-size", "" + jQuery(this).data("size") + "");
        }
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        jQuery('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !jQuery(this.element).hasClass('animated')) {
                i++;
                jQuery(this.element).addClass('item-animate');
                setTimeout(function () {
                    jQuery('body .animate-box.item-animate').each(function (k) {
                        var el = jQuery(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    jQuery(function () {
        contentWayPoint();
    });
    
    //  YouTubePopUp
    jQuery("a.vid").YouTubePopUp();      
	
    // MagnificPopup
    jQuery(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    jQuery('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
        
});


// Slider 
jQuery(document).ready(function() {
    var owl = jQuery('.header .owl-carousel');
    // Slider owlCarousel
    jQuery('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: jQuery(".slider .owl-carousel").data("speed"),
         nav: true,
         navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    jQuery('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: jQuery(".slider-fade .owl-carousel").data("speed") 	,
        animateOut: 'fadeOut',
		animateIn: 'fadeIn',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        jQuery('h4').removeClass('animated fadeInUp');
        jQuery('h1').removeClass('animated fadeInUp');
        jQuery('h2').removeClass('animated fadeInUp');
        jQuery('h3').removeClass('animated fadeInUp');
        jQuery('h5').removeClass('animated fadeInUp');
        jQuery('h6').removeClass('animated fadeInUp');
        jQuery('p').removeClass('animated fadeInUp');
        jQuery('.butn-light').removeClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
    });
});