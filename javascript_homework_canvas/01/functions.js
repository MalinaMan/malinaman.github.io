(function () {

	var $ = function(id) {
		return document.getElementById(id);
	}

	function draw()
	{
		if (!Modernizr.canvas) return;

		var canvas = $("canvas");
		var context = canvas.getContext("2d");

		var gradient = context.createLinearGradient(0, 0, 0, 250);

		gradient.addColorStop(0, "Pink");
		gradient.addColorStop(0.5, "HotPink");
		gradient.addColorStop(1, "MediumVioletRed");

		context.fillStyle = gradient;
		context.fillRect(0, 0, 400, 250);


		var canvasImage = canvas.cloneNode(true);
		$("canvases").appendChild(canvasImage);
		context = canvasImage.getContext("2d");
		
		var image = new Image();
		image.onload = function () {
			context.drawImage(image, 0, 0);
		};
		image.src = "autumn.jpg";
	}

	draw();

}());