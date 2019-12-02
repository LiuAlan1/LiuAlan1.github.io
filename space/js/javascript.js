function navbar() {
	var x = document.getElementById("responsiveNav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}