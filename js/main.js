/**
 * Main AngularJS Web Application
 */
var app = angular.module('elitewareWebApp', ['ngRoute', 'HomeModule']);

/**
 * Configure the Routes
 */
app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			pageTitle: "Inicio",
			templateUrl: "partials/home.html"
		})
		.when("/home", {
			pageTitle: "Inicio",
			templateUrl: "partials/home.html"
		})
		// Pages
		.when("/about-us", {
			pageTitle: "Acerca de Nosotros",
			templateUrl: "partials/about-us.html",
			controller: "PageCtrl"
		})
		.when("/faq", {
			templateUrl: "partials/faq.html",
			controller: "PageCtrl"
		})
		.when("/contact-us", {
			pageTitle: "Contáctanos",
			templateUrl: "partials/contact-us.html",
			controller: "PageCtrl"
		})
		/* etc… routes to other pages… */
		.when("/about-alfredo-godinez", {
			pageTitle: "Acerca de Alfredo Godinez",
			templateUrl: "partials/about/about-alfredo-godinez.html",
			controller: "PageCtrl"
		})
		.when("/about-daniel-morales", {
			pageTitle: "Acerca de Daniel Morales",
			templateUrl: "partials/about/about-daniel-morales.html",
			controller: "PageCtrl"
		})
		.when("/about-eladio-rodriguez", {
			pageTitle: "Acerca de Eladio Rodriguez",
			templateUrl: "partials/about/about-eladio-rodriguez.html",
			controller: "PageCtrl"
		})
		.when("/about-oscar-garcia", {
			pageTitle: "Acerca de Oscar García",
			templateUrl: "partials/about/about-oscar-garcia.html",
			controller: "PageCtrl"
		})
		.when("/about-oscar-vega", {
			pageTitle: "Acerca de Oscar Vega",
			templateUrl: "partials/about/about-oscar-vega.html",
			controller: "PageCtrl"
		})
		.when("/about-rafael-delgadillo", {
			pageTitle: "Acerca de Rafael Delgadillo",
			templateUrl: "partials/about/about-rafael-delgadillo.html",
			controller: "PageCtrl"
		})
		// Blog
		.when("/blog", {
			templateUrl: "partials/blog.html",
			controller: "BlogCtrl"
		})
		.when("/blog/post", {
			templateUrl: "partials/blog_item.html",
			controller: "BlogCtrl"
		})
		// else 404
		.otherwise("/404", {
			pageTitle: "Página no encontrada",
			templateUrl: "partials/page-404-error.html",
			controller: "PageCtrl"
		});

});

app.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.pageTitle = current.$$route.pageTitle;
	});

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

