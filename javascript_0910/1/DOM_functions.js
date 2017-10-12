(function () {

	function addParagraph()
	{
		var divP = $("Paragraphs");
		if (divP.childNodes.length === 10) {
			removeAllChilds(divP);
			return;
		}

		var item = document.createElement("p");
		item.innerHTML = "New paragraph " + (divP.childNodes.length + 1);
		divP.appendChild(item);
	}

	function removeAllChilds(node)
	{
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}

	var $ = function(id) {
		return document.getElementById(id);
	}

	$("addParagraph").addEventListener("click", addParagraph, false);

}());