(function($) {
    var imageSlidernew = function ($scope, $) {
	
	// Project Page owlCarousel
    jQuery('.project-page .owl-carousel').owlCarousel({
        loop: true
		, rtl:jQuery(".project-page .owl-carousel").data("rtl")
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: jQuery(".project-page .owl-carousel").data("projects-nav")
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });					

    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bauen-image-slider.default', imageSlidernew);
    });

   
})(jQuery);