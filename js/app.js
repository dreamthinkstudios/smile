// initiate webcam stream
  var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };

  // Not showing vendor prefixes.
  navigator.getUserMedia({video: true, audio: false}, function(localMediaStream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);

    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, errorCallback);



  var videoInput = document.getElementById('video');

  var ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput);

			function positionLoop() {
          requestAnimationFrame(positionLoop);
          var positions = ctracker.getCurrentPosition();
          // do something with the positions ...
          // print the positions
          var positionString = "";
          if (positions) {
            for (var p = 0;p < 10;p++) {
              positionString += "featurepoint "+p+" : ["+positions[p][0].toFixed(2)+","+positions[p][1].toFixed(2)+"]<br/>";
            }
            document.getElementById('positions').innerHTML = positionString;
          }
        }
        positionLoop();
  positionLoop();

	var canvasInput = document.getElementById('canvas');
				var cc = canvasInput.getContext('2d');
				function drawLoop() {
          requestAnimationFrame(drawLoop);
          cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
          ctracker.draw(canvasInput);
        }
        drawLoop();



        
// var videoInput = document.getElementById('inputVideo');

// // Initialization
// var ctracker = new clm.tracker();
// ctracker.init(pModel);

// // starting tracking
// ctracker.start(videoInput);

// // Getting the points of the currently fitted model
// var positions = ctracker.getCurrentPosition();

// // Drawing the currently fitted model on a given canvas
//  var canvasInput = document.getElementById('canvas');
//   var cc = canvasInput.getContext('2d');
//   function drawLoop() {
//     requestAnimationFrame(drawLoop);
//     cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
//     ctracker.draw(canvasInput);
//   }
//   drawLoop();

//   