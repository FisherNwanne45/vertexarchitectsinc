(function($) {
    var teamCarousel = function ($scope, $) {

		// Team owlCarousel
		jQuery('.team .owl-carousel').owlCarousel({
			loop: jQuery(".team .owl-carousel").data("bn-car-loop")
			, margin: 30
			, rtl:jQuery(".team .owl-carousel").data("rtl")
			, mouseDrag: true
			, autoplay: jQuery(".team .owl-carousel").data("team-autoplay")
			, autoplayTimeout:jQuery(".team .owl-carousel").data("team-autoplay-timeout")
			, smartSpeed: jQuery(".team .owl-carousel").data("team-speed")
			, nav: jQuery(".team .owl-carousel").data("projects-nav")
			, navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"]
			, dots: jQuery(".team .owl-carousel").data("projects-dots")
			, responsiveClass: true
			, responsive: {
				0: {
					margin: 10
					, items: 1
				}
				, 600: {
					items: 2
				}
				, 1000: {
					items: jQuery(".team .owl-carousel").data("team-item")
					, dots:jQuery(".team .owl-carousel").data("carousel-dots-desktop"), 
				}
			}
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bauen-team.default', teamCarousel);
    });

   
})(jQuery);