

// We use EC5 methods to acquire real-time date from a user's browser client-side ,- .getHours, .getMinutes, .getSeconds (https://www.w3schools.com/jsref/jsref_gethours.asp)

var d, h, m, s, color;

function displayTime() {
	d = new Date(); //new data object
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
	//add zero to the left of the numbers if they are single digits
	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
	
	color = "#"+h+m+s;
	//set background color
	document.getElementById("hexClock__container").style.background = color;
	//set time
	document.getElementById("hexClock").innerHTML = color;
	
	//update the function every second
	setTimeout(displayTime, 1000);
}

// We call our clock function
  displayTime();