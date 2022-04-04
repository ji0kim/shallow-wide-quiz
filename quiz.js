function getAnswer(button) {
	if (button === 'true') {
		console.log('correct');
	} else if (button !== 'true') {
		document.querySelector('#result').innerText = 'You lose';
		document.querySelector('#result').innerHTML = '<div id="result">You lose</div>';
	}
}
