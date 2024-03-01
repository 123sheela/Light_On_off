function change() {
    var img = document.getElementById("bulb");
    console.log("Current image source: " + img.src);
    if (img.src.includes("off")) {
        console.log("Changing to ON");
        img.src = "./assets/on.jpg";
    } else {
        console.log("Changing to OFF");
        img.src = "./assets/off.jpg";
    }
    console.log("New image source: " + img.src);
}
