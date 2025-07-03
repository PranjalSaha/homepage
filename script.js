function updateClock() 
{
	const now = new Date();

	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	minutes = minutes.toString().padStart(2, '0');
	seconds = seconds.toString().padStart(2, '0');

	now.toLocaleTimeString();

	document.getElementById('hours-minutes').textContent = 
		`${hours}:${minutes}`;
	document.getElementById('seconds').textContent =
		`${seconds}`
}
