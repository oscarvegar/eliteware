/**
 * Main AngularJS Web Application
 */
var app = angular.module('elitewareWebApp', ['ui.router', 'angular-flexslider', 'HomeModule', 
											 'DetalleProyectoModule', 'AboutUsModule', 
											 'EliteServiciosModule', 'Data']);

/**
 * Configure the Routes
 */
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("inicio", {
			url:"/",
			pageTitle: "Inicio",
			templateUrl: "partials/home.html"
		})
		.state("home", {
			url:"/home",
			pageTitle: "Inicio",
			templateUrl: "partials/home.html"
		})
		// About section
		.state('about',{
			templateUrl: 'partials/about.html'
		})
		.state("about.us", {
			pageTitle: "Acerca de Nosotros",
			url:"/about/us",
			templateUrl: "partials/about/about-us.html",
			controller: "AboutUsController"
		})
		.state("about.team", {
			pageTitle: "Acerca de Nosotros",
			url:"/about/team/:teamId",
			templateUrl: "partials/about/about-team.html",
			controller: "AboutUsController"
		})
		// Secciones/servicios section
		.state("servicios", {
			url:"/servicios",
			pageTitle: "Nuestros Servicios",
			templateUrl: "partials/page-our-services.html",
			controller: "EliteServiciosController"
		})
		.state("mapasitio", {
			url:"/mapasitio",
			pageTitle: "Mapa del Sitio",
			templateUrl: "partials/page-sitemap.html",
			controller: "EliteServiciosController"
		})
		.state("contact-us", {
			pageTitle: "Contáctanos",
			url:"/contact-us",
			templateUrl: "partials/contact-us.html",
			controller: "PageCtrl"
		})
		
		// Blog
		.state("/blog", {
			templateUrl: "partials/blog.html",
			controller: "BlogCtrl"
		})
		.state("/blog/post", {
			templateUrl: "partials/blog_item.html",
			controller: "BlogCtrl"
		})
		// Detalle Proyecto
		.state("detalle", {
			pageTitle: "Detalle",
			url:"/detalle",
			templateUrl: "partials/portfolio-single-project.html",
			controller: "DetalleProyectoController"
		});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
});

app.run(['$location', '$rootScope','$state', '$stateParams', 
function($location, $rootScope, $state, $stateParams) {
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		$rootScope.pageTitle = toState.pageTitle;
	});
	console.log("State in Run: ", $state.current);
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function( /* $scope, $location, $http */ ) {
	console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function( /* $scope, $location, $http */ ) {
	
});

app.directive('fancybox', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      	if (scope.$last){
			if (scope.$last){
				setTimeout(function() {
					$('.fancybox').fancybox({
						helpers : { title : { type : 'over' },
							overlay : {
								speedOut : 0,
								locked: false
							}
						}
					});
				},1);  
			}
	  	} 
    }
  };
});

app.directive('flexslider', function () {
  return {
    link: function (scope, element, attrs) {
		console.log("directive slider: ", element);
		setTimeout(function(){
			element.flexslider({
				animation: "slide",
				pauseOnHover: true,
				video: true,
				controlNav: true,
				directionNav: false,
				useCSS: false,
				slideshowSpeed: 10000
			});	
			$('.fancybox').fancybox({
				helpers : { title : { type : 'over' },
					overlay : {
						speedOut : 0,
						locked: false
					}
				}
			});
		},1);
    }
  }
});

app.directive('qtcontent', function () {
  return {
    link: function (scope, element, attrs) {
		setTimeout(function(){
			console.log("qtcontent")
			$('#cbp-qtrotator').cbpQTRotator({
				// transition speed (ms)
				speed : 700,
				// transition easing
				easing : 'ease',
				// rotator interval (ms)
				interval : 8000
			});
		},1);
    }
  }
});

app.directive('progressbar', function(){
	return{
		link:function(scope, element, attrs){
			/* ==========================================================================
			Progress Bars Animation
			========================================================================== */
			setTimeout(function(){
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
						$this.countTo({speed: 1000});
					}, {offset: '100%', triggerOnce: true});
				});
			},1);
		}
	}	
})