function change() {
    var img = document.getElementById("bulb");
    var timestamp = new Date().getTime(); // Get current timestamp
    img.src = "./assets/" + (img.src.includes("off") ? "on.jpg" : "off.jpg") + "?t=" + timestamp;
}

