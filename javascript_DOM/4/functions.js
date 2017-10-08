(function () {
	"use strict";
	
	document.addEventListener("keydown", function (e) {
		drag(e);
	});

	function drag(event)
	{
		const STEP = 10;
		var deltaX = 0, deltaY = 0;
		var e = event || window.event;

		var elementToDrag = document.getElementById('elem');
		var origX = elementToDrag.offsetLeft,
			origY = elementToDrag.offsetTop;

		if (e.keyCode == '38') {  // UP
			deltaY = -STEP;
		}
		else if (e.keyCode == '40') {  // DOWN
			deltaY = STEP;
		}
		else if (e.keyCode == '37') {  // LEFT
			deltaX = -STEP;
		}
		else if (e.keyCode == '39') {  // RIGHT
			deltaX = STEP;
		}

		var targetX = origX + deltaX,
			targetY = origY + deltaY;
		var maxX = document.documentElement.clientWidth - elementToDrag.clientWidth,
			maxY = document.documentElement.clientHeight - elementToDrag.clientHeight;

		elementToDrag.style.left = ((targetX < 0) ? 0 :
										(targetX > maxX) ? maxX : targetX) + "px";
		elementToDrag.style.top = ((targetY < 0) ? 0 :
										(targetY > maxY) ? maxY : targetY) + "px";
	}

})();