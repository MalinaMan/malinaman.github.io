import {superExample} from "./superFunc";

(function () {

	const SPACE = ' ';

	var $ = (id) => document.getElementById(id);
	var qs = (s) => document.querySelector(s);

	var form  = document.getElementsByTagName('form')[0];
	var menu  = document.getElementsByTagName('nav')[0];
	var email = qs("#inputEmail");

	if (true) {
		let fillNav = () =>	{
			let menuArr = [
				'About us',
				'History',
				'Catalog',
				'Contacts'];
			menuArr.map(elem => {
				let item = document.createElement("a");
				item.innerHTML = elem;
				item.setAttribute('href', '#');
				menu.appendChild(item);
				menu.appendChild(document.createTextNode(' | '));
			});
		};
		fillNav();
	}


	form.addEventListener("submit", event => {
		if (email.validity.typeMismatch) {
			event.preventDefault();
		}
	}, false);


	$("sortArr").addEventListener("click", event => {
		let arr = $("inputArr").value.split(',');
		arr.sort((a, b) => a - b);
		qs(".ResultSort").innerHTML = [...arr];
	}, false);


	let modifyArr = (arr, type = 'reverse') => {
		if (type = 'reverse') {
			return arr.reduceRight((a, b) => a.concat(b));
		}
	}

	let destr = ({first, second, third, fourth='assignment!'}) =>
				first + SPACE + second + SPACE + third + SPACE + fourth;

	$("reverseStr").addEventListener("click", event => {
		let str = $("inputStr").value;
		qs(".ResultReverse").innerHTML = modifyArr(str.split(''));
	}, false);

	$("destr").addEventListener("click", event => {
		let obj = {
			first: "It's",
			second: "example",
			third: "destructuring"
		};
		qs(".ResultDestr").innerHTML = destr(obj);
	}, false);


	$("calcArea").addEventListener("click", event => {
		let r = 7;
		qs(".ResultArea").innerHTML = `A = ${Math.PI * Math.pow(r,2)}`;
	}, false);


	$("superEx").addEventListener("click", event => {
		qs(".ResultSuper").innerHTML = superExample();
	}, false);

}());