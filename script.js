// window.onload = function() {

//     // Normalize the various vendor prefixed versions of getUserMedia.
//     navigator.getUserMedia = (navigator.getUserMedia ||
//                               navigator.webkitGetUserMedia ||
//                               navigator.mozGetUserMedia || 
//                               navigator.msGetUserMedia);
                              
//                               var vid = document.getElementById('camera-stream');
                              
//                               if (navigator.getUserMedia) {
//                                 // Request the camera.
//                                 navigator.getUserMedia(
//                                   // Constraints
//                                   {
//                                     video: true
//                                   },
                              
//                                   // Success Callback
//                                   function(localMediaStream) {
//                                     vid.src = window.URL.createObjectURL(localMediaStream);
//                                   },
                              
//                                   // Error Callback
//                                   function(err) {
//                                     // Log the error to the console.
//                                     console.log('The following error occurred when trying to use getUserMedia: ' + err);
//                                   }
//                                 );
                              
//                               } else {
//                                 alert('Sorry, your browser does not support getUserMedia');
//                               }
  
//   }
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});