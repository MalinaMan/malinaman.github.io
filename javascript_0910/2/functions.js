(function () {

	function FindClass(node, nameClass, arr)
	{
		var childNodes = node.childNodes;
		for(let i=0; i < childNodes.length; i++) {

			if (childNodes[i].nodeType != 1) {
				continue;
			}

			let child = childNodes[i];
			if (child.getAttribute("class") === nameClass) {
				arr.push(child);
			}

			FindClass(child, nameClass, arr);

		}
		return arr;
	}

	// arr = document.getElementsByClassName(nameClass);

	document.getElementById("findElements").addEventListener("click", function () {
		var arr = [];
		document.getElementById("result").innerHTML = FindClass(document, 'myClass', arr);
	}, false);

}());