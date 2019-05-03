function updateClock()
{
	let currentTime = new Date();

	let currentHours = currentTime.getHours();
	let currentMinutes = currentTime.getMinutes();
	let currentSeconds = currentTime.getSeconds();

	let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;


	let currentTimeString = `${ currentHours } : ${ currentMinutes } : ${ currentSeconds } ${ timeOfDay }`;

	document.querySelector(".clock").firstChild.nodeValue = currentTimeString;
}	
