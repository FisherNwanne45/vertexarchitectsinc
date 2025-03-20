(function($) {
    var postCarousel = function ($scope, $) {
	
	// Blog Home owlCarousel
    jQuery('.bauen-blog-el .owl-carousel').owlCarousel({
        loop: jQuery(".bauen-blog-el .owl-carousel").data("bn-car-loop")
        , margin: 30
		, rtl:jQuery(".bauen-blog-el .owl-carousel").data("rtl")
        , mouseDrag: true
        , autoplay: jQuery(".bauen-blog-el .owl-carousel").data("blog-autoplay")
		, autoplayTimeout:jQuery(".bauen-blog-el .owl-carousel").data("blog-autoplay-timeout")
        , smartSpeed: jQuery(".bauen-blog-el .owl-carousel").data("blog-speed")
        , nav: jQuery(".bauen-blog-el .owl-carousel").data("projects-nav")
		, navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
		, dots: jQuery(".bauen-blog-el .owl-carousel").data("projects-dots")
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: jQuery(".bauen-blog-el .owl-carousel").data("post-item"),
				dots:jQuery(".bauen-blog-el .owl-carousel").data("carousel-dots-desktop"),
            }
        }
    });					

    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bauen-post.default', postCarousel);
    });

   
})(jQuery);