	var node = null;

	function resetColor()
	{
		var liArr = document.getElementsByTagName("li");
		for (var i = 0; i < liArr.length; i++) {
			liArr[i].setAttribute("style", "color:black");
		}
	}

	function selectFirstChild()
	{
		resetColor();
		var list = document.getElementById("list");
		var child = list.firstChild;
		if (child != null) {
			child.setAttribute("style", "color:red;");
		}
	}

	function selectLastChild()
	{
		resetColor();
		var list = document.getElementById("list");
		var child = list.lastChild;
		if (child != null) {
			child.setAttribute("style", "color:red;");
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
			var list = document.getElementById("list");
			node = list.firstChild;
			node.setAttribute("style", "color:lime");
		} else {
			node.setAttribute("style", "color:lime");
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
			var list = document.getElementById("list");
			node = list.lastChild;
			node.setAttribute("style", "color:lime");
		} else {
			node.setAttribute("style", "color:lime");
		}
	}

	function createNewChild()
	{
		var list = document.getElementById("list");
		var item = document.createElement("li");
		item.innerHTML = "NEW ITEM";
		list.appendChild(item);
	}

	function removeLastChild()
	{
		var list = document.getElementById("list");
		var item = list.lastChild;
		if (item != null) {
			list.removeChild(item);
		}
	}

	function createNewChildAtStart() 
	{
		var list = document.getElementById("list");
		var item = document.createElement("li");
		item.innerHTML = "NEW ITEM";
		if (list.firstChild != null) {
			list.insertBefore(item, list.firstChild);
		} else {
			list.appendChild(item);
		}
	}