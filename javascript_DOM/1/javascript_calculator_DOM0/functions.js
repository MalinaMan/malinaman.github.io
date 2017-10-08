(function () {
	"use strict";

	var res = get("Result");

	function get(idName)
	{
		return document.getElementById(idName);
	}
	
	function Add()
	{
		res.innerHTML = "Result = " + (+get("NumberA").value + +get("NumberB").value);
		return true;
	}
	
	function Multiply()
	{
		res.innerHTML = "Result = " + (+get("NumberA").value * +get("NumberB").value);
		return true;
	}

	function Division()
	{
		var b = +get("NumberB").value;
		if (!b) {
			res.innerHTML = "Result = division by zero";
			return false;
		}
		res.innerHTML = "Result = " + (+get("NumberA").value / b);
		return true;
	}

	var funcSquare = new Function("a",
		"document.getElementById('Result').innerHTML = 'Result = ' + Math.pow(a, 2);");
	
	var funcSqrt = function() {
		res.innerHTML = "Result = " + Math.sqrt(+get("NumberA").value);
		return true;
	}


	get('Add').onclick = Add;
	get("Multiply").onclick = Multiply;
	get("Division").onclick = Division;
	get("Sqrt").onclick = funcSqrt;
	
	get("Square").onclick = function() {
			funcSquare(+get('NumberA').value);
		};

}());