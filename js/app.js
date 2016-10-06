var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}


// var videoInput = document.getElementById('inputVideo');

// var ctracker = new clm.tracker();
// ctracker.init(pModel);

// ctracker.start(videoInput);

// var positions = ctracker.getCurrentPosition();

// var drawCanvas = document.getElementsById('somecanvas');
// ctracker.draw(drawCanvas);