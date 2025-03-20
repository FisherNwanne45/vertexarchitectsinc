jQuery(function() {
    "use strict";
    
    // Preloader
    var loader = jQuery(".loader");
    var wHeight = jQuery(window).height();
    var wWidth = jQuery(window).width();
    var o = 0;
    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })
    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }
    setTimeout(function() {
        jQuery(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3500);
    var wind = jQuery(window);
});
// Preloader page
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};
Pace.on('done', function () {
    jQuery('#preloader').addClass("isdone");
    jQuery('.loading-text').addClass("isdone");
});
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
var initDestroyTimeOutPace = function() {
    var counter = 0;

    var refreshIntervalId = setInterval( function(){
        var progress; 

        if( typeof jQuery( '.pace-progress' ).attr( 'data-progress-text' ) !== 'undefined' ) {
            progress = Number( jQuery( '.pace-progress' ).attr( 'data-progress-text' ).replace("%" ,'') );
        }
		if( progress === 80 ) {
            counter++;
        }
		else if( progress === 81 ) {
            counter++;
        }
		else if( progress === 82 ) {
            counter++;
        }
		else if( progress === 83 ) {
            counter++;
        }
		else if( progress === 84 ) {
            counter++;
        }
		else if( progress === 85 ) {
            counter++;
        }
		else if( progress === 86 ) {
            counter++;
        }
		else if( progress === 87 ) {
            counter++;
        }
		else if( progress === 88 ) {
            counter++;
        }
		else if( progress === 89 ) {
            counter++;
        }
		else if( progress === 90 ) {
            counter++;
        }
		else if( progress === 91 ) {
            counter++;
        }
		else if( progress === 92 ) {
            counter++;
        }
		else if( progress === 93 ) {
            counter++;
        }
		else if( progress === 94 ) {
            counter++;
        }
		else if( progress === 95 ) {
            counter++;
        }
		else if( progress === 96 ) {
            counter++;
        }
        else if( progress === 97 ) {
            counter++;
        }
		else if( progress === 98 ) {
			counter++;
		}

        if( counter > 5 ) {
            clearInterval(refreshIntervalId);
            Pace.stop();
        }
    }, 100);
}
initDestroyTimeOutPace();
}