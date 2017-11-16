(function () {

	var $ = function(id) {
		return document.getElementById(id);
	}


	if (typeof Worker === "undefined") {
		$("support").innerHTML = "Браузер поддерживает HTML 5 Web Workers";
		return;
	}

	var worker = new Worker("taskW.js");
	worker.addEventListener("message", e =>
		$("output").innerHTML = "Flow response: " + e.data,
		true);

	worker.postMessage('Start');

}());