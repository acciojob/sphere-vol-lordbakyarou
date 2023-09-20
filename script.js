function volume_sphere() {
    //Write your code here
let getRadius = document.getElementById("radius");
	let getValue = document.getElementById("volume");

	 let getRadiu = getRadius.value;
  let cal = getRadiu * getRadiu * 3.14;

	 getValue.value = cal;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
