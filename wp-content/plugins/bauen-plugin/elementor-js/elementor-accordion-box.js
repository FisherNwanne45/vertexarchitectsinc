(function($) {
    

		// Accordion Box
	if (jQuery(".accordion-box").length) {
		jQuery(".accordion-box").on("click", ".acc-btn", function () {
		  var outerBox = jQuery(this).parents(".accordion-box");
		  var target = jQuery(this).parents(".accordion");

		  if (jQuery(this).next(".acc-content").is(":visible")) {
			//return false;
			jQuery(this).removeClass("active");
			jQuery(this).next(".acc-content").slideUp(300);
			jQuery(outerBox).children(".accordion").removeClass("active-block");
		  } else {
			jQuery(outerBox).find(".accordion .acc-btn").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(outerBox).children(".accordion").removeClass("active-block");
			jQuery(outerBox).find(".accordion").children(".acc-content").slideUp(300);
			target.addClass("active-block");
			jQuery(this).next(".acc-content").slideDown(300);
		  }
		});
	}


    ;

    //$(window).on('elementor/frontend/init', function () {
       // elementorFrontend.hooks.addAction('frontend/element_ready/bauen-accordion.default', accordionBox);
    //});

   
})(jQuery);