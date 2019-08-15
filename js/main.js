jQuery(document).ready(function ($) {
	"use strict";
	
	$(function(){
	    $('.selectpicker').selectpicker();
	});


    
	// Sticky navbar
// =========================
            $(document).ready(function () {
                // Custom function which toggles between sticky class (is-sticky)
                var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                    var stickyHeight = sticky.outerHeight();
                    var stickyTop = stickyWrapper.offset().top;
                    if (scrollElement.scrollTop() >= stickyTop) {
                        stickyWrapper.height(stickyHeight);
                        sticky.addClass("is-sticky");
                    }
                    else {
                        sticky.removeClass("is-sticky");
                        stickyWrapper.height('auto');
                    }
                };

                // Find all data-toggle="sticky-onscroll" elements
                $('[data-toggle="sticky-onscroll"]').each(function () {
                    var sticky = $(this);
                    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                    sticky.before(stickyWrapper);
                    sticky.addClass('sticky');

                    // Scroll & resize events
                    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                        stickyToggle(sticky, stickyWrapper, $(this));
                    });

                    // On page load
                    stickyToggle(sticky, stickyWrapper, $(window));
                });
            });

    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $('#menu').outerHeight() + 1,
    }, 600);
    });
    var $window = $(window);
    var $buttonTop = $('.button-top');

    $buttonTop.on('click', function () {
        $('html, body').animate({
          scrollTop: 0,
        }, 400);
    });

    $window.on('scroll', function () {
        if ($window.scrollTop() > 100) { // 100 is our threshold in pixels
          $buttonTop.addClass('button-top-visible');
        } else {
          $buttonTop.removeClass('button-top-visible');
        }
    });
})
