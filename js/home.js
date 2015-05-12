/**
 * Created by oscar on 7/05/15.
 */
var myApp = angular.module("HomeModule",[]);

myApp.controller( "HomeController", function($scope, $http, $rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $scope.loadHome();
    });
    $scope.loadHome = function(){
        /* ==========================================================================
         Background Slider
         ========================================================================== */
        $('#home-section').backstretch([
            "images/slider/app1.jpg",
            "images/slider/2-1920x1080.jpg"
        ], {
            fade: 750,
            duration: 25000
        });

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
    }
    $scope.loadHome();
})