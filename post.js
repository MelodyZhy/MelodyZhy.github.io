function sendBeacon() {
	const typedArray = new Int8Array(8);
	// let data = new FormData();
	// data.append('hello', 'world');
	let result = navigator.sendBeacon("https://www.easy-mock.com/mock/5ceb8995e545c31990ed600b/test/uploadMessage", typedArray);
	if (result) {
		alert("成功");
	} else {
		alert("失败");
	}
}