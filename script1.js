var x = prompt("Do you agree on sharing your personal information with our site? Type 1 for yes or 2 for no.");
if (x < 2) {

document.getElementById("Name").innerHTML = prompt("Please enter your Name.");

var Height = prompt("Please enter your height in inches.");
document.getElementById("height").innerHTML = Height*0.083;

var Weight = prompt("Please enter your weight in kilograms.");
document.getElementById("weight").innerHTML = Weight*2.205;

}

else {
	alert("User does not wish to share his/her information.")
}