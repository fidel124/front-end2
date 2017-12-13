var app = angular.module('testApp', 
  [
    "ngRoute",
    "ngSanitize",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    "com.2fdevs.videogular.plugins.buffering"
  ]);

   app.config(['$routeProvider', function($routeProvider){
  		  $routeProvider
  			    .when("/home", { templateUrl: "views/home.html",
                            controller: "HomeController"
  			                })
  			    .when("/search", { templateUrl: "views/msearch.html",
                              controller: "SearchController"
  			                })
            .when("/video", { templateUrl: "views/video.html",
                              controller: "VideoController"
                        })              			
  			    .otherwise({ redirectTo: "/home" })
   }]);    