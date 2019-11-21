/* For The First Room - West Door Puzzle */
function checkSolutionStartWest() {
    var textValue = document.getElementById("textBox").value;
    if(textValue.toLowerCase() == "e"){
        location.href = "hallwaywest.html";
    }
    else{
        location.href = "gameover1.html";
    }
}
/* For The First Room - North Door Puzzle */
function checkSolutionStartNorth() {
    var textValue = document.getElementById("textBox").value;
    if(textValue.toLowerCase() == "a"){
        location.href = "hallwaynorth.html";
    }
    else{
        location.href = "gameover1.html";
    }
}
/* For The First Room - East Door Puzzle */
function checkSolutionStartEast() {
    var textValue = document.getElementById("textBox").value;
    if(textValue.toLowerCase() == "t"){
        location.href = "hallwayeast.html";
    }
    else{
        location.href = "gameover1.html";
    }
}
/* For (West)Storage Facility - Door Puzzle */
function checkSolutionWestPuzzle() {
    var textValue = document.getElementById("textBox").value;
    if(textValue == 2479){
        location.href = "puzzleroomwest1exit.html";
    }
    else{
        location.href = "gameover2.html";
    }
}
/* For (East)Lab - Door Puzzle */
function checkSolutionEastPuzzle() {
    var textValue = document.getElementById("textBox").value;
    if(textValue == 70001514){
        location.href = "puzzleroomeast1exit.html";
    }
    else{
        location.href = "gameover3.html";
    }
}
/* For (East)Control Center - Safe Puzzle */
function checkSolutionControlPuzzle() {
    var textValue = document.getElementById("textBox").value;
    if(textValue == 1){
        location.href = "puzzleroomsafepuzzle.html";
    }
    else{
        location.href = "gameover4.html";
    }
}
/* For (East)Control Center - Safe Bomb */
function checkSolutionSafePuzzle() {
    var textValue = document.getElementById("textBox").value;
    if(textValue.toLowerCase() == "tomb"){
        location.href = "puzzleroomcontrolexit.html";
    }
    else{
        location.href = "gameover5.html";
    }
}