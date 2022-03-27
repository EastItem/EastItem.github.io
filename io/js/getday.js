function getday() {
	var d = new Date().getDay()
	var bias = new Date().getDay() + 3
	return (d + bias) % 7
}