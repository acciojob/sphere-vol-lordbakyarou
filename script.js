function volume_sphere(event) {
    // Prevent the default form submission behavior
    

    let getRadius = document.getElementById("radius");
    let getValue = document.getElementById("volume");

    let getButton = document.getElementById("submit");

    
        let getRadiu = getRadius.value;
        let cal = (4/3) * Math.PI * Math.pow(getRadiu, 3);
        getValue.value = cal.toFixed(4);
   
	event.preventDefault();
}

window.onload = function() {
    const form = document.getElementById('MyForm');
    form.addEventListener('submit', volume_sphere);
};
