function volume_sphere(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    let getRadius = document.getElementById("radius");
    let getValue = document.getElementById("volume");

    let getButton = document.getElementById("submit");

    getButton.addEventListener("click", () => {
        let getRadiu = getRadius.value;
        let cal = getRadiu * getRadiu * 3.14;
        getValue.value = cal;
    });
}

window.onload = function() {
    const form = document.getElementById('MyForm');
    form.addEventListener('submit', volume_sphere);
};
