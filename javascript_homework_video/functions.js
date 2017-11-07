(function () {

	var $ = function(id) {
		return document.getElementById(id);
	}

	$("playButton").addEventListener("click", function() {
			video.play();
		}, false);
	$("pauseButton").addEventListener("click", function() {
			video.pause();
		}, false);
	$("stopButton").addEventListener("click", function() {
			video.pause();
			video.currentTime = 0;
		}, false);
	$("switchLoop").addEventListener("click", function() {
			if (switchLoop.checked) {
				video.setAttribute('loop', true);
			} else {
				video.removeAttribute('loop');
			}
		}, false);

}());