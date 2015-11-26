/**
 * Created by oscar on 7/05/15.
 */
var myApp = angular.module("HomeModule",[]);

myApp.controller( "HomeController", function($scope, $http, $rootScope, $location){
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $scope.loadHome();
    });
    $scope.loadHome = function(){
        var proyectoSelected = localStorage.getItem("proyecto");
        if( proyectoSelected ){
            $scope.proyectoSelected = JSON.parse(proyectoSelected);   
        }
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
        
        //**  PROYECTOS REALIZADOS EFECTOS
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
        $(".fancybox").fancybox({
            helpers : { title : { type : 'over' },
                overlay : {
                    speedOut : 0,
                    locked: false
                }
            }
        });
        
        /* ==========================================================================
        ToolTip
        ========================================================================== */
        $("li[data-rel=tooltip]").tooltip();
        $("a[data-rel=modal-tooltip]").tooltip();
        $("a[data-rel=tooltip]").tooltip({container: 'body'});
        $("i[data-rel=tooltip]").tooltip({container: 'body'});
        $("span[data-rel=tooltip]").tooltip({container: 'body'});
        
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
        
    }
    $scope.loadHome();
    $scope.setProyectoEnPortafolio = function( proyecto ){
        $scope.proyecto = {};
        if( proyecto === 'yoplanner' ){
            $scope.proyecto.alias = "yoplanner";
            $scope.proyecto.titulo = "Yo Planner";
            $scope.proyecto.imagen = "images/work/yoplanner.png";
            $scope.proyecto.link = "http://www.yoplanner.com";
            $scope.proyecto.detalle1 = "Empresa mexicana especializada en la organización y planeación tanto de meetings y conferencias para empresas, como de viajes turísticos.";
            $scope.proyecto.detalle2 = "Puedes encontrar cualquier salon, centro de convenciones o auditorio dentro y fuera de los hoteles que se adapte a tus necesidades.";
            $scope.proyecto.detalle3 = "Aqui te podrán ayudar a conseguir hospedaje y transporte para todos los asistentes y ambientar el lugar para que tu meeting sea todo un éxito.";
            $scope.proyecto.images = ["images/single-project/yoplanner1.png","images/single-project/yoplanner2.png","images/single-project/yoplanner3.png"];
            $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
            {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];
        }else if( proyecto === 'biocalpert' ){
            $scope.proyecto.alias = "biocalpert";
            $scope.proyecto.titulo = "Biocalpert Admin";
            $scope.proyecto.imagen = "images/work/biocalper.png";
            $scope.proyecto.link = "http://www.yoplanner.com:8081/";
            $scope.proyecto.detalle1 = "Empresa fundada a principios del año 2010, cuyo objetivo principal es asesorar a los médicos en toda la república mexicana sobre equipos como Ultrasonido Portátil, Dopplex Vascular, Láser Quirurgico, Presoterapia, Grabadoras de Cardiologia";
            $scope.proyecto.detalle2 = "Dentro de nuestro equipo de trabajo, contamos con ingenieros Bio-médicos con más de 25 años de experiencia en tema de comercialización, capacitación y reparación de los mismos equipos.";
            $scope.proyecto.detalle3 = "";
            $scope.proyecto.images = ["images/single-project/biocalpert1.png","images/single-project/biocalpert2.png"];
            $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
            {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];
        }else if( proyecto === 'mitianguis' ){
            $scope.proyecto.alias = "mitianguis";
            $scope.proyecto.titulo = "Mi Tianguis MX";
            $scope.proyecto.imagen = "images/work/mitianguis.png";
            $scope.proyecto.link = "http://www.yoplanner.com:8082/";
            $scope.proyecto.detalle1 = "Sitio Ecommerce desarrollado por Eliteware.IO con el objetivo de proveer a costos bajos su propia tienda virtual a cualquier persona que este interesada en verder algo";
            $scope.proyecto.detalle2 = "Dentro de las características del sitio esta el pago con tarjeta de crédito sin uso de terminal para poder hacer cobros en donde quiera que estes solo con acceso a internet.";
            $scope.proyecto.detalle3 = "Tambien podras afiliarte como miembro y pertener a la red Ecommerce y obtener muchos beneficios.";
            $scope.proyecto.images = ["images/work/mitianguis.png"];
            $scope.proyecto.opiniones = [{opinion:"Excelente, responsable y con grandes resultados, garantizando su desarrollos con un alto grado de calidad y siempre en tiempo.", autorOpinion:"Mauricio Gerardo Giron Riveroll"},
            {opinion:"Estuvimos buscando una soluci&oacute;n eficaz para poder estar en contacto con los ciudadanos, para que pudieran conocer a sus representantes pol&iacute;ticos, y el equipo de Eliteware supo adecuarse a nuestros requerimientos y hacer realidad la aplicaci&oacute;n que necesit&aacute;bamos, ahora nos encontramos m&aacute;s cerca de los ciudadanos, conocer sus problem&aacute;ticas y recibir sus propuestas por medio de la aplicaci&oacute;n.", autorOpinion:"Javier Oloarte"}];
        }
        localStorage.setItem("proyecto", JSON.stringify($scope.proyecto) );
        $("#modalDetalle").modal("show");
    }
    
    $scope.goDetalle = function(){
        $('#modalDetalle').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    } 
    
    
})