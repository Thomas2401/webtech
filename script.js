// JavaScript Document

function save_name() {
	var playerInput = document.getElementById("textBox").value;
	localStorage.setItem("name", playerInput);
	console.log("TEST");
	
}

function setName() {
	var pname = localStorage.getItem("name");
	document.getElementById("name").innerHTML = pname + " ";
}

function volume() {
	
}