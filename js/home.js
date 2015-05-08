/**
 * Created by oscar on 7/05/15.
 */
var myApp = angular.module("HomeModule",[]);

myApp.controller( "HomeController", function($scope, $http, $rootScope){
    $('#home-section').backstretch([
        "images/slider/app1.jpg",
        "images/slider/2-1920x1080.jpg"
    ], {
        fade: 750,
        duration: 25000
    });
})