(function () {

	var url = 'https://api.nytimes.com/svc/semantic/v2/geocodes/query.json';
	url += '?' + param({
			'api-key': '7378ebcbbe1347f298237d943b64c98b',
			'feature_class': 'P',
			'elevation': '1000_'
		});

	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhttp = new XHR();

	document.getElementById("getDataNYT").addEventListener("click", event => {
		let fullUrl = url + '&' + param({
			'country_code': document.querySelector('input[name="country_code"]:checked').value
		});
		xhttp.open("GET", fullUrl, true);
		xhttp.send();

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				// Typical action to be performed when the document is ready:
				let data = JSON.parse(this.responseText).results;
				let posts = data.map(mapToPost);

				let oldChild = document.querySelector('.table');
				let item = document.createElement("div");
				item.className = 'table';
				item.innerHTML = `<div class="tr">
									<div class="th post-name">Locality</div>
						              <div class="th post-state">State</div>
						              <div class="th post-country">Country</div>
						              <div class="th post-population">Population</div>
						              <div class="th post-coordinates">Coordinates</div>
						              <div class="th post-timezone">Timezone</div>
					              </div>` +
					              getPostsTemplate(posts);
				if (oldChild) {
					document.body.replaceChild(item, oldChild);
				} else {
					document.body.appendChild(item);
				}
			}
		};
	}, false);


	function mapToPost(post) {
		return {
			name: post.name,
			state: post.admin_name1,
			country: post.country_name,
			population: post.population,
			coordinates: post.latitude + '&deg; ' + post.longitude + '&deg;',
			timezone: post.time_zone_id
		}
	}

	function getPostsTemplate(posts) {
		return posts.reduce((tmpl, post) => {
			tmpl +=  `<div class="tr">
					<div class="td post-name">${post.name}</div>
					<div class="td post-state">${post.state}</div>
					<div class="td post-country">${post.country}</div>
					<div class="td post-population">${post.population}</div>
					<div class="td post-coordinates">${post.coordinates}</div>
					<div class="td post-timezone">${post.timezone}</div>
				</div>`;
			return tmpl;
		}, '');
	}

}());