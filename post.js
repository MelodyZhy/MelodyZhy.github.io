function sendBeacon() {
	// const typedArray = new Int8Array(8);
	// let data = new FormData();
	// data.append('hello', 'world');
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", "uploadString");
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}

function fetchTest() {
	var url = 'https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage';
	var data = {username: 'example'};
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then(res => res.json())
	.catch(error => alert(error))
	.then(response => alert(response));
	
}