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

	var validKeyPress = function (e)
	{
		if (!(e.charCode >= 48 && e.charCode <= 57  // must be between 0 and 9 (ascii codes 48...57)
			|| e.charCode === 45)) {   // negative sign
			e.preventDefault();
		}
	}


	get('Add').addEventListener("click", Add, false);
	get("Multiply").addEventListener("click", Multiply, false);
	get("Division").addEventListener("click", Division, false);
	get("Sqrt").addEventListener("click", funcSqrt, false);
	
	get("Square").addEventListener("click", function() {
			funcSquare(+get('NumberA').value);
		}, false);

	get('InputNumbers').addEventListener("keypress", validKeyPress, true);

})();