(function(){ 
	app.controller('VideoController',
		['$sce', '$timeout','$scope', function($sce, $timeout, $scope){
		
      var controller = this;
      
      controller.state = null;
      controller.API = null;
      controller.currentVideo = null;
      

      controller.onPlayerReady = function(API) {
          controller.API = API;
      };

      controller.onCompleteVideo = function() {
          controller.isCompleted = true;
         //controller.currentVideo++;               
         if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;
         //controller.setVideo(controller.currentVideo);
      };

      controller.videos = [
      {
          sources: [
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
          ],
         name: "Pale Blue Dot test"
      },

      {
          sources: [
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4"},
              {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
          ],
        name: "Big Buck Bunny test"
      }
      ];

       controller.config = {
          preload: "none",
          autoHide: false,
          autoHideTime: 3000,
          autoPlay: false,
          sources: controller.videos[0].sources,                
          theme: {
              url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
          } /*,
          plugins: {
              poster: "http://www.videogular.com/assets/images/videogular.png"
          } */
      };

     controller.setVideo = function(index) {
          controller.API.stop();
          controller.currentVideo = index;
          controller.config.sources = controller.videos[index].sources;             
          $timeout(controller.API.play.bind(controller.API), 100);
          (function(){
                  var body = $('body');             
                  body.toggleClass('menu-open');
                  return false;                    
          })();
      };
      $scope.controller = controller;
    }]
  );				
})();