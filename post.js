function sendBeacon_arrayBufferView() {
	const typedArray = new Int8Array(8);
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", typedArray);
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}

function sendBeacon_blob() {
	var debug = {hello: "world"};
	var blob = new Blob([JSON.stringify(debug, null, 2)], { type: 'text/plain; charset=UTF-8' });
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", blob);
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}

function sendBeacon_string() {
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", "DOMString");
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}

function sendBeacon_formData() {
	let data = new FormData();
	data.append('hello', 'world');
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", data);
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}

function fetch_json() {
	var url = 'https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage';
	var data = {username: 'example'};
	fetch(url, {
		method: 'POST',
		cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
		mode: 'cors', // no-cors, cors, *same-origin
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // *client, no-referrer
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then(function(response) {
		response.json().then(function(data) {
			alert(JSON.stringify(data));
		});
	}).catch(error => alert(error));
	
}

function fetch_file() {
	var formData = new FormData();
	var fileField = document.querySelector("input[type='file']");

	alert(fileField.files[0]);

	formData.append('username', 'abc123');
	formData.append('avatar', fileField.files[0]);

	var url = 'https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage';
	fetch(url, {
 		method: 'POST',
  		body: formData
	}).then(function(response) {
		response.json().then(function(data) {
			alert(JSON.stringify(data));
		});
	}).catch(error => alert(error))
}

function fetch_URLSearchParams() {
	var url = 'https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage';
	var paramsString = "test=demo&topic=api"
	var searchParams = new URLSearchParams(paramsString);
	fetch(url, {
		method: 'POST',
		cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
		mode: 'cors', // no-cors, cors, *same-origin
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // *client, no-referrer
		body: searchParams
	}).then(function(response) {
		response.json().then(function(data) {
			alert(JSON.stringify(data));
		});
	}).catch(error => alert(error));
}


