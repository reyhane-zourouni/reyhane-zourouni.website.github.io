$(document).ready(function(){
  
    
    jQuery(".backtotop").addClass("hidden-top");
        jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() === 0) {
            jQuery(".backtotop").addClass("hidden-top")
        } else {
            jQuery(".backtotop").removeClass("hidden-top")
        }
    });

    jQuery('.backtotop').click(function () {
        jQuery('body,html').animate({
                scrollTop:0
            }, 1000);
        return false;
    });

	// The starting defaults.
    var config = {
        reset: true,
        init: true
    };
    window.scrollReveal = new scrollReveal( );
	

    });



    
    

