(function () {

	const RADIUS = 185;

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

	function drawFlag(flag, context)
	{
		var bw = flag.borderWidth;
		context.strokeStyle = 'black';
		context.lineWidth = bw;
		context.strokeRect(flag.x, flag.y, flag.width, flag.height);

		context.lineWidth = 0;
		context.fillStyle = '#000000';
		context.fillRect(flag.x, flag.y + bw/2, flag.width/3, flag.height - bw);
		context.fillStyle = '#FFE936';
		context.fillRect(flag.x + flag.width/3, flag.y + bw/2, flag.width/3, flag.height - bw);
		context.fillStyle = '#FF0F21';
		context.fillRect(flag.x + flag.width * 2/3, flag.y + bw/2, flag.width/3 - bw/2, flag.height - bw);
	}

	function getAngle(time, linearSpeed) {
		return linearSpeed * time / 1000;
	}

	function animate(flag, canvas, context, startTime) {
		var time = (new Date()).getTime() - startTime;
		var linearSpeed = 1.5;

		if (getAngle(time, linearSpeed) > 2 * Math.Pi) {
			startTime = (new Date()).getTime();
			time = 4;
		}

		var a = getAngle(time, linearSpeed);
		flag.x = Math.round(flag.startX + RADIUS * Math.cos(a));
		flag.y = Math.round(flag.startY + RADIUS * Math.sin(a));

		context.clearRect(0, 0, canvas.width, canvas.height);

		drawFlag(flag, context);

		requestFrame(function () {
			animate(flag, canvas, context, startTime);
		});
	}

	if (!Modernizr.canvas) return;
	var canvas = $('canvas');
	var context = canvas.getContext('2d');

	var flag = {
			x: 0,
			y: 0,
			startX: 240,
			startY: 205,
			width: 120,
			height: 90,
			borderWidth: 2
		};

	drawFlag(flag, context);
	animate(flag, canvas, context, (new Date()).getTime());

}());