
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*multiple functions for multiple dropdown menus*/
function dropDown1() {
    document.getElementById("dropdown1").classList.toggle("show");
}
function dropDown2() {
    document.getElementById("dropdown2").classList.toggle("show");
}
function dropDown3() {
    document.getElementById("dropdown3").classList.toggle("show");
}
function dropDown4() {
    document.getElementById("dropdown4").classList.toggle("show");
}
function dropDown5() {
    document.getElementById("dropdown5").classList.toggle("show");
}
function dropDown6() {
    document.getElementById("dropdown6").classList.toggle("show");
}
function dropDown7() {
    document.getElementById("dropdown7").classList.toggle("show");
}
function dropDown8() {
    document.getElementById("dropdown8").classList.toggle("show");
}
function dropDown9() {
    document.getElementById("dropdown9").classList.toggle("show");
}
function dropDown10() {
    document.getElementById("dropdown10").classList.toggle("show");
}
function dropDown11() {
    document.getElementById("dropdown11").classList.toggle("show");
}
function dropDown12() {
    document.getElementById("dropdown12").classList.toggle("show");
}
function dropDown13() {
    document.getElementById("dropdown13").classList.toggle("show");
}
function dropDown14() {
    document.getElementById("dropdown14").classList.toggle("show");
}
function dropDown15() {
    document.getElementById("dropdown15").classList.toggle("show");
}

// Keep the dropdown menu even if the user clicks outside of it
window.click = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
		for (i = 0; i < dropdowns.length; i++) {
		    var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
	 	    }
   		}
    }
}

