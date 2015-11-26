/**
 * Created by oscar on 19/Nov/2015.
 */
var myApp = angular.module("AboutUsModule",[]);

myApp.controller( "AboutUsController", function($scope, $http, $rootScope, $location, $stateParams, DataService){
	$scope.load = function(){
		console.log("state params: ", $stateParams );
		if( $stateParams.teamId === "oscarg" ){
			$scope.team = DataService.getDataOscarg();
			$rootScope.pageTitle = $scope.team.nombre;
		}else if( $stateParams.teamId === "oscarm" ){
			$scope.team = DataService.getDataOscarm();
			$rootScope.pageTitle = $scope.team.nombre;
		}else if( $stateParams.teamId === "oscarv" ){
			$scope.team = DataService.getDataOscarv();
			$rootScope.pageTitle = $scope.team.nombre;
		}else if( $stateParams.teamId === "danielm" ){
			$scope.team = DataService.getDataDanielm();
			$rootScope.pageTitle = $scope.team.nombre;
		}else if( $stateParams.teamId === "rafaeld" ){
			$scope.team = DataService.getDataRafaeld();
			$rootScope.pageTitle = $scope.team.nombre;
		}
		window.scrollTo(0, 30);
		
		setTimeout(function(){
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
					$this.countTo({speed: 1000});
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
		},1);
  	}
  	$scope.load();
	 
	
});
