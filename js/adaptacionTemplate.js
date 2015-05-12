/*jshint new: true */
/*global $, jQuery, document, window, GnMenu, setInterval, post_arrow, post_item, navigator, mina, Snap, GMaps*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {


    'use strict';


    var Topmenu, toggleanimatedPresimg, counter_url, $teamitems, $portfolioitems4, $portfolioitems3, $portfolioitems2, social_networks, formInput, $blogitems, $blogtlitems, onMobile, imgshinevar, map;


    /* ==========================================================================
    Modify Copied Text
    ========================================================================== */
    function addLink() {
        var body_element, selection, pagelink, copytext, newdiv;
        body_element = document.getElementsByTagName('body')[0];
        selection = window.getSelection();
        pagelink = " Read more at: <a href='" + document.location.href + "'>" + document.location.href + "</a>";
        copytext = selection + pagelink;
        newdiv = document.createElement('div');
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function () {
            body_element.removeChild(newdiv);
        }, 0);
    }
    document.oncopy = addLink;


    /* ==========================================================================
    Menu
    ========================================================================== */
    Topmenu = new GnMenu(document.getElementById('gn-menu'));


    /* ==========================================================================
    Flex Slider
    ========================================================================== */
    /* Home Slider
    -------------------------------------------------------------------------- */
    $('.home-slider').flexslider({

        before: function (slider) {

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-1').fadeOut().animate({left: '500px'}, {queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-1').hide().css({left: '500px'});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-2').fadeOut().animate({left: '500px'}, {queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-2').hide().css({left: '500px'});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated1').fadeOut().animate({queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-3 .animated1').hide().css({opacity: '0'});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated2').fadeOut().animate({queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-3 .animated2').hide().css({opacity: '0'});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated3').fadeOut().animate({queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-3 .animated3').hide().css({opacity: '0'});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated4').fadeOut().animate({queue: false, easing: 'linear', duration: 550});
			slider.slides.eq(slider.animatingTo).find('.flex-caption .caption-animation .caption-3 .animated4').hide().css({opacity: '0'});

		},
		after: function (slider) {

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-1').fadeIn().animate({left: '0'}, {queue: false, easing: 'linear', duration: 950});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-2').fadeIn().animate({left: '0'}, {queue: false, easing: 'linear', duration: 650});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated1').fadeIn().animate({opacity: '1'}, {queue: false, easing: 'linear', duration: 650});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated2').fadeIn().animate({opacity: '1'}, {queue: false, easing: 'linear', duration: 1050});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated3').fadeIn().animate({opacity: '1'}, {queue: false, easing: 'linear', duration: 1450});

            slider.slides.eq(slider.currentSlide).find('.flex-caption .caption-animation .caption-3 .animated4').fadeIn().animate({opacity: '1'}, {queue: false, easing: 'linear', duration: 1850});

		},
		pauseOnHover: false,
		video: true,
		controlNav: true,
        directionNav: false,
        useCSS: false,
        slideshowSpeed: 10000
	});

    /* Testimonial Slider
    -------------------------------------------------------------------------- */
    $('#testimonial-flexslider').flexslider({
        animation: "slide",
        pauseOnHover: true,
		video: true,
		controlNav: false,
        directionNav: true,
        useCSS: false,
        slideshowSpeed: 10000
    });
    $('#team-flexslider').flexslider({
        animation: "slide",
        pauseOnHover: true,
		video: true,
		controlNav: true,
        directionNav: false,
        useCSS: false,
        slideshowSpeed: 10000
    });

    $('.team-style1 li').mouseenter(function () {
        $(this).find('.img-shine').css({top: '85px', left: '85px',
                                       background: 'linear-gradient(90deg, rgba(255, 255, 255, 0)50%, rgba(255, 255, 255, 0.4)100%)'
                                       });
    });
    $('.team-style1 li').mouseleave(function () {
        $(this).find('.img-shine').css({top: '-185px', left: '-185px',
                                        background: 'rgba(255, 255, 255, 0)'
                                       });
    });

    /* Project Slider
    -------------------------------------------------------------------------- */
    $('#project-flexslider').flexslider({
        animation: "slide",
        pauseOnHover: true,
		video: true,
		controlNav: false,
        directionNav: true,
        useCSS: false,
        slideshowSpeed: 10000
    });

    /* Post Slider
    -------------------------------------------------------------------------- */
    $('.post-flexslider').flexslider({
        animation: "slide",
        pauseOnHover: true,
		video: true,
		controlNav: false,
        directionNav: true,
        useCSS: false,
        slideshowSpeed: 10000
    });


    /* ==========================================================================
    Latest Works
    ========================================================================== */
    $(".latest-works li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:first-child').addClass('animated slideInLeft');
    });
    $(".latest-works li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:first-child').removeClass('animated slideInLeft');
    });

    $(".latest-works li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:last-child').addClass('animated slideInRight');
    });
    $(".latest-works li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:last-child').removeClass('animated slideInRight');
    });


    /* ==========================================================================
    ToolTip
    ========================================================================== */
    $("li[data-rel=tooltip]").tooltip();
    $("a[data-rel=modal-tooltip]").tooltip();
    $("a[data-rel=tooltip]").tooltip({container: 'body'});
    $("i[data-rel=tooltip]").tooltip({container: 'body'});
    $("span[data-rel=tooltip]").tooltip({container: 'body'});


    /* ==========================================================================
    Fancy Box
    ========================================================================== */
    $(".fancybox").fancybox({
        helpers : {
            title : {
                type : 'over'
            },
            overlay : {
                speedOut : 0,
                locked: false
            }
        }
    });

    $(".minimap").fancybox({
		'transitionIn': 'none',
		'transitionOut': 'none',
        'type': 'iframe'
	});


    /* ==========================================================================
    Modal
    ========================================================================== */
    /* Project Modal
    -------------------------------------------------------------------------- */
    $('#lwModal').modal({
        show: false,
        backdrop: 'static'
    });


    /* ==========================================================================
    Presentaion
    ========================================================================== */
    $('.presentaion img').waypoint(function () {
        $(this).addClass('animated shake');
    }, {
        offset: '45%'
    });

    toggleanimatedPresimg = function () {
        $(".presentaion img").removeClass('animated shake');
    };

    setInterval(toggleanimatedPresimg, 5000);


    /* ==========================================================================
    Scroll To top
    ========================================================================== */
    jQuery('.topcontrol a').click(function () {
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });


    /* ==========================================================================
    Twitter Feed
    ========================================================================== */
    $('.tweetfeed .tweet').twittie({
        dateFormat: '%b. %d, %Y',
        template: '<a href="http://twitter.com/gothic20100" title="Twitter"><i class="fa fa-twitter"></i></a> {{tweet}}',
        count: 2,
        hideReplies: true
    });


    /* ==========================================================================
    Flickr Feed
    ========================================================================== */
    $('#flickr-feed').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '25461271@N07'
        },
        itemTemplate: '<li>' + '<a href="{{image_b}}" class="fancybox" data-fancybox-group="gall1" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>'
    });


    /* ==========================================================================
    Section Title Counter
    ========================================================================== */
    $(".section-title [data-to]").each(function () {
        var $this = $(this);

        $this.waypoint(function () {
            $this.countTo({});
        }, {offset: '60%', triggerOnce: true});
    });


    /* ==========================================================================
    Progress Bars Animation
    ========================================================================== */
    $("[data-progress-percent]").each(function () {
        var $this = $(this);

        $this.waypoint(function () {
            $this.animate({
                width: $this.attr("data-progress-percent")
            }, 1700, "linear");
        }, {offset: '100%', triggerOnce: true });
    });

    $(".progress [data-to]").each(function () {
        var $this = $(this);

        $this.waypoint(function () {
            $this.countTo({speed: 2000});
        }, {offset: '100%', triggerOnce: true});
    });


    /* ==========================================================================
    Accordion
    ========================================================================== */
    $(function () {
        $('#ac-container').accordion({
            oneOpenedItem: true
        });
    });


    /* ==========================================================================
    Team Grid
    ========================================================================== */
    $teamitems = $('.team-grid');
    $teamitems.isotope({
        filter: '*',
        animationOptions: {
            duration: 850,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter a').removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-filter');
        $teamitems.isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });


    /* ==========================================================================
    Portfolio Grid
    ========================================================================== */
    /* Portfolio Grid 4 Columns
    -------------------------------------------------------------------------- */
    $portfolioitems4 = $('.portfolio-grid-4');
    $portfolioitems4.isotope({
        filter: '*',
        animationOptions: {
            duration: 850,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter a').removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-filter');
        $portfolioitems4.isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $(function () {
        $('#da-thumbs > li').each(function () { $(this).hoverdir(); });
    });

    $(".portfolio-grid-4 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:first-child').addClass('animated slideInLeft');
    });
    $(".portfolio-grid-4 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:first-child').removeClass('animated slideInLeft');
    });

    $(".portfolio-grid-4 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:last-child').addClass('animated slideInRight');
    });
    $(".portfolio-grid-4 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:last-child').removeClass('animated slideInRight');
    });


    /* Portfolio Grid 3 Columns
    -------------------------------------------------------------------------- */
    $portfolioitems3 = $('.portfolio-grid-3');
    $portfolioitems3.isotope({
        filter: '*',
        animationOptions: {
            duration: 850,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter a').removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-filter');
        $portfolioitems3.isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $(".portfolio-grid-3 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:first-child').addClass('animated slideInLeft');
    });
    $(".portfolio-grid-3 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:first-child').removeClass('animated slideInLeft');
    });

    $(".portfolio-grid-3 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:last-child').addClass('animated slideInRight');
    });
    $(".portfolio-grid-3 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:last-child').removeClass('animated slideInRight');
    });


    /* Portfolio Grid 2 Columns
    -------------------------------------------------------------------------- */
    $portfolioitems2 = $('.portfolio-grid-2');
    $portfolioitems2.isotope({
        filter: '*',
        animationOptions: {
            duration: 850,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter a').removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-filter');
        $portfolioitems2.isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $(".portfolio-grid-2 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:first-child').addClass('animated slideInLeft');
    });
    $(".portfolio-grid-2 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:first-child').removeClass('animated slideInLeft');
    });

    $(".portfolio-grid-2 li").mouseenter(function () {
        $(this).find('.img-figure-overlayer a:last-child').addClass('animated slideInRight');
    });
    $(".portfolio-grid-2 li").mouseleave(function () {
        $(this).find('.img-figure-overlayer a:last-child').removeClass('animated slideInRight');
    });


    /* ==========================================================================
    knob ProgressBar
    ========================================================================== */
    $('.skill-chart').waypoint(function () {
        $(".skill-chart").knob({
            readOnly: true,
            fgColor: "rgba(227, 224, 226, 0.2)",
            bgColor: "transparent",
            thickness: 0.1,
            width: "150",
            height: "150"
        });
        $('.skill-chart').each(function () {
            var $this, myVal;
            $this = $(this);
            myVal = "100";
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        });
    }, {
        offset: '100%',
        triggerOnce: true
    });

    $(".round-skill").mouseenter(function () {
        $(this).find('i').addClass('animated bounceIn');
    });
    $(".round-skill").mouseleave(function () {
        $(this).find('i').removeClass('animated bounceIn');
    });


    /* ==========================================================================
    Counter
    ========================================================================== */
    counter_url = 'php/social_counter.php';
    social_networks = [ 'facebook_Count', 'youtube_Count' ];
    $(function () {
        $.each(social_networks, function (key) {
            $('.' + social_networks[key]).html('<img src="images/ajax-load-black.gif" />');
        });

        $.each(social_networks, function (key) {
            $.ajax({
                type: "POST",
                url: counter_url,
                data: 'act=' + social_networks[key],
                error : 'error',
                success: function (html) {
                    $('.' + social_networks[key]).html(html);
                }
            });
        });
    });


    /* ==========================================================================
    Progrss Counter
    ========================================================================== */
    $("h2[data-to]").each(function () {
        var $this = $(this);

        $this.waypoint(function () {
            $this.countTo({});
        }, {offset: '90%', triggerOnce: true});
    });


    /* ==========================================================================
    FORM Validation
    ========================================================================== */
    $('form#form').submit(function () {
        $('form#form .error').remove();
        var hasError = false;
        $('.requiredField').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            $('form#form input.submit').fadeOut('normal', function () {
                $(this).parent().append('');
            });
            formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function (data) {
                $('form#form').slideUp("fast", function () {
                    $(this).before('<p class="success">Thanks! Your email was successfully sent. We will contact you asap.</p>');
                });
            });
        }
        return false;
    });


    /* ==========================================================================
    Quote Slider
    ========================================================================== */
    $(function () {
        $('#cbp-qtrotator').cbpQTRotator({
            // transition speed (ms)
            speed : 700,
            // transition easing
            easing : 'ease',
            // rotator interval (ms)
            interval : 8000
        });
    });


    /* ==========================================================================
    Responsive Video
    ========================================================================== */
    $(".videos").fitVids();
    $(".post-thumbnail").fitVids();


    /* ==========================================================================
    Blog Normal
    ========================================================================== */
    function blog_post_item() {
        $blogitems = $('#blog-normal');
        $blogitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function blog_post_direction() {
        $('#blog-normal article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    blog_post_direction();
	blog_post_item();


    /* ==========================================================================
    Blog Timeline
    ========================================================================== */
    function post_item() {
        $blogtlitems = $('#blog-timeline');
        $blogtlitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function post_arrow() {
        $('#blog-timeline article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    post_arrow();
	post_item();


    /* ==========================================================================
    commentsForm Validation
    ========================================================================== */
    $('form#commentsForm').submit(function () {
        $('form#commentsForm .error').remove();
        var hasError = false;
        $('.requiredField').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            $('form#commentsForm input.submit').fadeOut('normal', function () {
                $(this).parent().append('');
            });
            formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function (data) {
                $('form#commentsForm').slideUp("fast", function () {
                    $(this).before('<p class="success">Thanks! Your comment was successfully sent. Your comment is awaiting moderation.</p>');
                });
            });
        }
        return false;
    });


    /* ==========================================================================
    Description Box
    ========================================================================== */
    function init() {
        var speed = 330,
            easing = mina.backout;
        [].slice.call(document.querySelectorAll('#grid > a')).forEach(function (el) {
            var s = new Snap(el.querySelector('svg')), path = s.select('path'),
                pathConfig = {
                    from : path.attr('d'),
                    to : el.getAttribute('data-path-hover')
                };
            el.addEventListener('mouseenter', function () {
                path.animate({'path' : pathConfig.to}, speed, easing);
            });
            el.addEventListener('mouseleave', function () {
                path.animate({'path' : pathConfig.from }, speed, easing);
            });
        });
    }
    init();


    /* ==========================================================================
    Map
    ========================================================================== */
    map = new GMaps({
        el: '#map',
        scrollwheel: false,
        lat: 29.983775,
        lng: 31.167161
    });
    map.addMarker({
        lat: 29.983775,
        lng: 31.167161,
        icon: "images/we-are-here.png"
    });


    /* Footer Toggle
    ========================================================================== */
    $('.footer-toogle i').click(function () {
        var state = $(this).data('toggleState');
        if (!state) {
            $('.footer .top-footer').slideDown('slow');
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
            $('.footer-toogle i').removeClass('fa-plus');
            $('.footer-toogle i').addClass('fa-minus');
            $('.footer-toogle').css({backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, #232323 50%, #232323 100%)'});
            $('.footer').css({borderTop: '8px solid #232323'});
            $('.topcontrol a').css({backgroundColor: '#232323'});
        } else {
            $('.footer .top-footer').slideUp('slow');
            $('.footer-toogle i').addClass('fa-plus');
            $('.footer-toogle i').removeClass('fa-minus');
            $('.footer-toogle').css({backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, #333333 50%, #333333 100%)'});
            $('.footer').css({borderTop: '8px solid #333333'});
            $('.topcontrol a').css({backgroundColor: '#333333'});
        }
        $(this).data('toggleState', !state);
    });

    $('.footer .top-footer').slideUp('slow');


    /* Nice Scroll
    ========================================================================== */
	$("html").niceScroll({
		scrollspeed: 70,
		mousescrollstep: 10,
		cursorwidth: 8,
		cursorborder: 0,
		cursorcolor: '#333333',
		autohidemode: false,
		zindex: 6998,
		horizrailenabled: false,
		cursorborderradius: 0
	});


    /* ==========================================================================
    on mobile?
    ========================================================================== */
	onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

	if (onMobile === true) {
        $("li[data-rel=tooltip]").tooltip('destroy');
        $("a[data-rel=modal-tooltip]").tooltip('destroy');
        $("a[data-rel=tooltip]").tooltip('destroy');
        $("i[data-rel=tooltip]").tooltip('destroy');
        $("span[data-rel=tooltip]").tooltip('destroy');

        /* Blur Section
        ---------------------------------------------------------------------------*/
        $(".blur2-section").css({background: 'transparent url(images/background/2.jpg) repeat center center'});
    }


}); // JavaScript Document




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {

    'use strict';

    /* ==========================================================================
    Blog Normal
    ========================================================================== */
    var $blogitems, $blogtlitems;

    $('.loading').animate({
        opacity: 0
    }, 1000);
    $('.loading').hide(1500);


    $('.blog-normal').animate({
        opacity: 1
    }, 2500);

    function blog_post_item() {
        $blogitems = $('#blog-normal');
        $blogitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function blog_post_direction() {
        $('#blog-normal article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    blog_post_direction();
	blog_post_item();


    /* ==========================================================================
    Blog Timeline
    ========================================================================== */
    $('.blog-timeline').animate({
        opacity: 1
    }, 1500);

    function post_item() {
        $blogtlitems = $('#blog-timeline');
        $blogtlitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function post_arrow() {
        $('#blog-timeline article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    post_arrow();
	post_item();

});




/* ==========================================================================
Window Resize
========================================================================== */
$(window).resize(function () {

    'use strict';

    /* ==========================================================================
    Blog Normal
    ========================================================================== */
    var $blogitems, $blogtlitems;

    function blog_post_item() {
        $blogitems = $('#blog-normal');
        $blogitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function blog_post_direction() {
        $('#blog-normal article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    blog_post_direction();
	blog_post_item();


    /* ==========================================================================
    Blog Timeline
    ========================================================================== */
    function post_item() {
        $blogtlitems = $('#blog-timeline');
        $blogtlitems.isotope({
            transformsEnabled: false,
            itemSelector: 'article',
            animationEngine: 'jquery',
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            }
        });
    }

    function post_arrow() {
        $('#blog-timeline article').each(function () {
            var posLeft = $(this).css('left');
            if (posLeft === '0px') {
                $(this).removeClass('right-post');
                $(this).addClass('left-post');
            } else {
                $(this).removeClass('left-post');
                $(this).addClass('right-post');
            }
        });
    }

    post_arrow();
	post_item();

});