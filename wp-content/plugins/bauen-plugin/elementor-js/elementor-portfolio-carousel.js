(function($) {
    var portfolioCarousel = function ($scope, $) {
	
    // Projects owlCarousel
    jQuery('.projects .owl-carousel').owlCarousel({
        loop: jQuery(".projects .owl-carousel").data("bn-car-loop")
        , margin: 30
		, rtl:jQuery(".projects .owl-carousel").data("rtl")
        , mouseDrag: true
        , autoplay: jQuery(".projects .owl-carousel").data("projects-autoplay")
		, autoplayTimeout:jQuery(".projects .owl-carousel").data("projects-autoplay-timeout")
        , smartSpeed: jQuery(".projects .owl-carousel").data("projects-speed")
        , nav: jQuery(".projects .owl-carousel").data("projects-nav")
		, navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
		, dots: jQuery(".projects .owl-carousel").data("projects-dots")
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: jQuery(".projects .owl-carousel").data("post-item"),
				dots:jQuery(".projects .owl-carousel").data("carousel-dots-desktop"),
            }
        }
    });  				

    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bauen-portfolio-carousel.default', portfolioCarousel);
    });

   
})(jQuery);