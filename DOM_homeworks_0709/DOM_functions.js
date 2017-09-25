(function () {
	var node = null;
	const COLOR_LIME = 'color:lime';
	const COLOR_RED = 'color:red';
	const COLOR_BLACK = 'color:black';

	function resetColor()
	{
		var liArr = document.getElementsByTagName("li");
		for (var i = 0; i < liArr.length; i++) {
			liArr[i].setAttribute("style", COLOR_BLACK);
		}
	}

	function selectFirstChild()
	{
		resetColor();
		var list = $("list");
		var child = list.firstChild;
		if (child != null) {
			child.setAttribute("style", COLOR_RED);
		}
	}

	function selectLastChild()
	{
		resetColor();
		var list = $("list");
		var child = list.lastChild;
		if (child != null) {
			child.setAttribute("style", COLOR_RED);
		}
	}

	function selectNextNode()
	{
		resetColor();
		setFirstChild = (node == null);
		if (!setFirstChild) {
			node = node.nextSibling;
			setFirstChild = (node == null);
		}

		if (setFirstChild) {
			var list = $("list");
			node = list.firstChild;
			node.setAttribute("style", COLOR_LIME);
		} else {
			node.setAttribute("style", COLOR_LIME);
		}
	}

	function selectPrevNode()
	{
		resetColor();
		setLastChild = (node == null);
		if (!setLastChild) {
			node = node.previousSibling;
			setLastChild = (node == null);
		}

		if (setLastChild) {
			var list = $("list");
			node = list.lastChild;
			node.setAttribute("style", COLOR_LIME);
		} else {
			node.setAttribute("style", COLOR_LIME);
		}
	}

	function createNewChild()
	{
		var list = $("list");
		var item = document.createElement("li");
		item.innerHTML = "NEW ITEM";
		list.appendChild(item);
	}

	function removeLastChild()
	{
		var list = $("list");
		var item = list.lastChild;
		if (item != null) {
			list.removeChild(item);
		}
	}

	function createNewChildAtStart() 
	{
		var list = $("list");
		var item = document.createElement("li");
		item.innerHTML = "NEW ITEM";
		if (list.firstChild != null) {
			list.insertBefore(item, list.firstChild);
		} else {
			list.appendChild(item);
		}
	}

	var $ = function(id) {
		return document.getElementById(id);
	}

	$("selectFirstChild").addEventListener("click", selectFirstChild, false);
	$("selectLastChild").addEventListener("click", selectLastChild, false);
	$("selectNextNode").addEventListener("click", selectNextNode, false);
	$("selectPrevNode").addEventListener("click", selectPrevNode, false);
	$("createNewChild").addEventListener("click", createNewChild, false);
	$("removeLastChild").addEventListener("click", removeLastChild, false);
	$("createNewChildAtStart").addEventListener("click", createNewChildAtStart, false);

}());