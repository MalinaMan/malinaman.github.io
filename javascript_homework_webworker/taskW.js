addEventListener("message", (e) => {
	
	var data = e.data;
	if (e.data !== 'Start') {
		postMessage('Unknown command !');
		return;
	}

	const maxElement = 1000000;  // 100
	var arr = [];
	for (let i=0; i<maxElement; i++) {
		arr.push(~~(Math.random() * 100));
	}
	arr.sort((a, b) => a - b);

	postMessage("The task was completed successfully");
	//postMessage(arr);

}, true);