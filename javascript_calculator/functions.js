(function () {
	"use strict";

	var res = document.getElementById("Result");

	function get(idName)
	{
		return +document.getElementById(idName).value;
	}
	
	function Add()
	{
		res.innerHTML = "Result = " + (get("NumberA") + get("NumberB"));
		return true;
	}
	
	function Multiply()
	{
		res.innerHTML = "Result = " + (get("NumberA") * get("NumberB"));
		return true;
	}

	function Division()
	{
		var b = get("NumberB");
		if (!b) {
			res.innerHTML = "Result = division by zero";
			return false;
		}
		res.innerHTML = "Result = " + (get("NumberA") / b);
		return true;
	}

	var funcSquare = new Function("a",
		"document.getElementById('Result').innerHTML = 'Result = ' + Math.pow(a, 2);");
	
	var funcSqrt = function() {
		res.innerHTML = "Result = " + Math.sqrt(get("NumberA"));
		return true;
	}


	document.getElementById("Add").addEventListener("click", Add, false);
	document.getElementById("Multiply").addEventListener("click", Multiply, false);
	document.getElementById("Division").addEventListener("click", Division, false);
	document.getElementById("Sqrt").addEventListener("click", funcSqrt, false);
	
	document.getElementById("Square").addEventListener("click", function() {
			funcSquare(get('NumberA'));
		}, false);

}());