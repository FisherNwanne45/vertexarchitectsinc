(function($) {
    var bannerBg = function ($scope, $) {

	var pageSection = jQuery(".bg-img-d");
    pageSection.each(function (indx) {
        if (jQuery(this).attr("data-background")) {
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
    });


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bauen-banner-image.default', bannerBg);
    });

   
})(jQuery);