(function () {

	var $ = function(id) {
		return document.getElementById(id);
	}

	window.requestFrame = function (callback) {
		var f = window.mozRequestAnimationFrame ||
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 500);
				};
		f(callback);
	};

	function drawStar(star, context)
	{
		context.strokeStyle = 'black';
		context.lineWidth = star.borderWidth;
		context.beginPath();
		context.moveTo(star.x, star.y);
		context.lineTo(star.x+100, star.y);
		context.lineTo(star.x+50, star.y+90);
		context.closePath();		
		context.stroke();

		context.beginPath();
		context.moveTo(star.x+50, star.y-30);
		context.lineTo(star.x+100, star.y+60);
		context.lineTo(star.x, star.y+60);
		context.closePath();
		context.stroke();
	}

	function animate(star, canvas, context, startTime) {
		var time = (new Date()).getTime() - startTime;
		var linearSpeed = 80;

		var newY = star.startY + linearSpeed * time / 1000;
		if (newY < canvas.height - star.height - star.borderWidth / 2) {
			star.y = newY;
		}

		context.clearRect(0, 0, canvas.width, canvas.height);

		drawStar(star, context);

		requestFrame(function () {
			animate(star, canvas, context, startTime);
		});
	}

	if (!Modernizr.canvas) return;
	var canvas = $('canvas');
	var context = canvas.getContext('2d');

	var star = {
			x: 20,
			y: 40,
			startY: 40,
			height: 90,
			borderWidth: 2
		};

	drawStar(star, context);
	animate(star, canvas, context, new Date().getTime());

}());