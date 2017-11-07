(function () {

	var $ = function(id) {
		return document.getElementById(id);
	}

	var catalogList = document.querySelectorAll('#CatalogList li');
	for (let i=0; i<catalogList.length; ++i)
	{
		catalogList[i].setAttribute('id', catalogList[i].innerHTML);
		catalogList[i].setAttribute('draggable', 'true');
	}


	var source = $("CatalogList");
	source.addEventListener('dragstart', function (evt) {
		evt.target.style.opacity = .5;
		evt.dataTransfer.effectAllowed = "move";
		evt.dataTransfer.setData("Text", evt.target.id);
	}, true);

	source.addEventListener("dragend", function (evt) {
		evt.target.style.opacity = '';
	}, true);


	var target = $("BasketList");
	target.addEventListener("dragenter", function (evt) {
		this.style['background-color'] = "LightBlue";
	}, false);

	target.addEventListener("dragleave", function (evt) {
		this.style['background-color'] = "aliceblue";
	}, false);

	target.addEventListener("dragover", function (evt) {
		if (evt.preventDefault) evt.preventDefault();
		return false;
	}, false);

	target.addEventListener("drop", function (evt) {

		if (evt.preventDefault) evt.preventDefault();
		if (evt.stopPropagation) evt.stopPropagation();

		var elemLi = $(evt.dataTransfer.getData("Text"));
		this.appendChild(elemLi);
		evt.dataTransfer.clearData();

		this.style['background-color'] = 'aliceblue';

		return false;
	}, false);

}());