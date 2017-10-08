(function () {
	"use strict";

	function get(idName)
	{
		return document.getElementById(idName);
	}
	
	function Add()
	{
		get("Result").innerHTML = "Result = " + (+get("NumberA").value + +get("NumberB").value);
		return true;
	}
	
	function Multiply()
	{
		get("Result").innerHTML = "Result = " + (+get("NumberA").value * +get("NumberB").value);
		return true;
	}

	function Division()
	{
		var b = +get("NumberB").value;
		if (!b) {
			get("Result").innerHTML = "Result = division by zero";
			return false;
		}
		get("Result").innerHTML = "Result = " + (+get("NumberA").value / b);
		return true;
	}

	var funcSquare = new Function("a",
		"document.getElementById('Result').innerHTML = 'Result = ' + Math.pow(a, 2);");
	
	var funcSqrt = function()
	{
		get("Result").innerHTML = "Result = " + Math.sqrt(+get("NumberA").value);
		return true;
	}


	if (window.addEventListener) {
		window.addEventListener("load", init, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", init);
	}


	function init()
	{
		if (get('Add').addEventListener) {
			get('Add').addEventListener("click", Add, false);
			get("Multiply").addEventListener("click", Multiply, false);
			get("Division").addEventListener("click", Division, false);
			get("Sqrt").addEventListener("click", funcSqrt, false);
			
			get("Square").addEventListener("click", function() {
					funcSquare(+get('NumberA').value);
				}, false);
		}	// for IE8
		else if (get('Add').attachEvent) {
			get('Add').attachEvent("onclick", Add);
			get("Multiply").attachEvent("onclick", Multiply);
			get("Division").attachEvent("onclick", Division);
			get("Sqrt").attachEvent("onclick", funcSqrt);
			
			get("Square").attachEvent("onclick", function() {
					funcSquare(+get('NumberA').value);
				});
		}
	}

})();