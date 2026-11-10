function volume_sphere() {

    let radius = parseFloat(document.getElementById("radius").value);

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    if (isNaN(radius) || radius < 0) {
        volume = "NaN";
    } else {
        volume = volume.toFixed(4);
    }

    document.getElementById("volume").value = volume;
}