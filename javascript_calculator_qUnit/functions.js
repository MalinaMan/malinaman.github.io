(function () {
	"use strict";

	var numberA = $("NumberA");
	var numberB = $("NumberB");
	var res = $("Result");
	
	function Add()
	{
		res.innerHTML = (+numberA.value + +numberB.value);
		return true;
	}
	
	function Multiply()
	{
		res.innerHTML = (numberA.value * numberB.value);
		return true;
	}

	function Division()
	{
		var b = +numberB.value;
		if (!b) {
			res.innerHTML = "division by zero";
			return false;
		}
		res.innerHTML = (numberA.value / b);
		return true;
	}

	var funcSquare = new Function("a",
		"$('Result').innerHTML = Math.pow(a, 2);");
	
	var funcSqrt = function() {
		res.innerHTML = Math.sqrt(+numberA.value);
		return true;
	}


	$("Add").addEventListener("click", Add, false);
	$("Multiply").addEventListener("click", Multiply, false);
	$("Division").addEventListener("click", Division, false);
	$("Sqrt").addEventListener("click", funcSqrt, false);
	
	$("Square").addEventListener("click", function() {
			funcSquare(numberA.value);
		}, false);

}());