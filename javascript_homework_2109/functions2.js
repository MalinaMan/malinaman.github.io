(function paramsGet() {
	"use strict";
	
	function getQueryString()
	{
		var args = {};
		var query = location.search.substring(1);
		var pairs = query.split("&");

		for (let i = 0; i < pairs.length; i++) {
			let pos = pairs[i].indexOf('=');
			if (pos == -1) {
				continue;
			}

			let argname = pairs[i].substring(0, pos);
			let value 	= pairs[i].substring(++pos);

			args[argname] = value;
		}

		return args;
	}

	function show()
	{
		var args = getQueryString();
		if (!("a" in args) || !("b" in args)) {
			document.getElementById("result").innerHTML = "Warning: in query not exists param 'a' and/or 'b'";
			return;
		}
		document.getElementById("result").innerHTML = "Sum = " + (+args.a + +args.b);
	}

	document.getElementById("readQueryParameters").addEventListener("click", show, false);
	
}());