

(function(window){
	function init () {
		var errorCallback = function(e) {
			console.log('Rejected!', e);
		};

		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; 

		var video = document.getElementsByTagName('audio')[0];

		if (navigator.getUserMedia) {
			navigator.getUserMedia({audio: true}, function(stream) {
				video.src = window.URL.createObjectURL(stream);
			}, errorCallback);
		}
	}


	window.onload = init;
})(window);