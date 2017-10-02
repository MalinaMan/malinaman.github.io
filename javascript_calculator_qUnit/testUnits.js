(function () {
	"use strict";

	function testUnit() {
		//Register a callback to fire whenever a testsuite starts.
			QUnit.begin(function(details) {
				var data = $("console").innerHTML;
				$("console").innerHTML = "<br/>" +
					"QUnit.begin- Test Suite Begins " + "<br/>" +
					"Total Test: " + details.totalTests;
			});

			//Register a callback to fire whenever a test suite ends.
			QUnit.done(function( details ) {
				var data = $("console").innerHTML;
				$("console").innerHTML = data + "<br/><br/>" +
					"QUnit.done - Test Suite Finised" +  "<br/>" + "Total: " +
					details.total + " Failed: " + details.failed + " Passed:" + details.passed;
			});

			//Register a callback to fire whenever a module starts.
			QUnit.moduleStart(function( details ) {
				var data = $("console").innerHTML;
				$("console").innerHTML = data + "<br/><br/>" +
					"QUnit.moduleStart - Module Begins " +  "<br/>" + details.name;
			});

			//Register a callback to fire whenever a module ends.
			QUnit.moduleDone(function( details ) {
				var data = $("console").innerHTML;
				$("console").innerHTML = data + "<br/><br/>" +
					"QUnit.moduleDone - Module Finished " +  "<br/>" + details.name +
					" Failed/total: " + details.failed +"/" + details.total ;
			});

			//Register a callback to fire whenever a test starts.
			QUnit.testStart(function( details ) {
				var data = $("console").innerHTML;
				$("console").innerHTML = data + "<br/><br/>" +
					"QUnit.testStart - Test Begins " +  "<br/>" + details.module + details.name;
			});

			//Register a callback to fire whenever a test ends.
			QUnit.testDone(function( details ) {
				var data = $("console").innerHTML;
				$("console").innerHTML = data + "<br/><br/>" +
					"QUnit.testDone - Test Finished " +  "<br/>" + details.module +" "
					+ details.name + "Failed/total: " + details.failed +" " + details.total+
					" "+ details.duration;
			});
	}


	function testUnitAdd()
	{
		QUnit.test("test case 'Add'", function(assert) {
			assert.ok($("Result").innerHTML == +$('NumberA').value + +$('NumberB').value,
						"Module A: in test case 'Add' ");
		});
	}

	function testUnitMultiply()
	{
		QUnit.test( "test case 'Multiply'", function(assert) {
			assert.ok($("Result").innerHTML == $('NumberA').value * $('NumberB').value,
						"Module A: in test case 'Multiply' ");
		});
	}

	function testUnitDivision()
	{
		QUnit.test( "test case 'Division'", function(assert) {
			var numberB = +$('NumberB').value;
			if (numberB === 0) {
				assert.equal($("Result").innerHTML, "division by zero", "Module A: in test case 'Division' ");
			} else {
				assert.notOk(+$("Result").innerHTML !== $('NumberA').value / numberB, "Module A: in test case 'Division' ");
			}
		});
	}

	function testUnitSqrt()
	{
		QUnit.test("test case 'Sqrt'", function(assert) {
				assert.ok(+$("Result").innerHTML === Math.sqrt($('NumberA').value),
						"Module B: in test case 'Sqrt' ");
		});
	}

	function testUnitSquare()
	{
		QUnit.test("test case 'Square'", function(assert) {
				assert.ok(+$("Result").innerHTML === $('NumberA').value * $('NumberA').value,
						"Module B: in test case 'Square' ");
		});
	}

	function testUnitModuleA(typeOfOperation)
	{
		testUnit();

		QUnit.module("Module A", {
			beforeEach: function( assert ) {
				assert.ok(Number.isInteger(+$('NumberA').value) && Number.isInteger(+$('NumberB').value), "before test case" );
			}
		});

		switch (typeOfOperation) {
			case 'add': testUnitAdd(); break;
			case 'multiply': testUnitMultiply(); break;
			case 'division': testUnitDivision();
		}
	}

	function testUnitModuleB(typeOfOperation)
	{
		QUnit.module( "Module B" );

		switch (typeOfOperation) {
			case 'sqrt': testUnitSqrt(); break;
			case 'square': testUnitSquare();
		}
	}


	$("Add").addEventListener("click", function() {
			testUnitModuleA('add');
		}, false);
	$("Multiply").addEventListener("click", function() {
			testUnitModuleA('multiply');
		}, false);
	$("Division").addEventListener("click", function() {
			testUnitModuleA('division');
		}, false);

	$("Sqrt").addEventListener("click", function() {
			testUnitModuleB('sqrt');
		}, false);
	$("Square").addEventListener("click", function() {
			testUnitModuleB('square');
		}, false);
}());