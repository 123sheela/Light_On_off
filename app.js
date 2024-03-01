function change() {
    var img = document.getElementById("bulb");
    var fileName = img.src.substring(img.src.lastIndexOf("/") + 1);
    if (fileName === "off.jpg") {
        img.src = "./assets/on.jpg";
    } else {
        img.src = "./assets/off.jpg";
    }
}
