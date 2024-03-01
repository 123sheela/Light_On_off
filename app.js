
var isBulbOn = false;

function change() {
    var img = document.getElementById("bulb");
    

    isBulbOn = !isBulbOn;

    if (isBulbOn) {
        img.src = "./assets/on.jpg";
    } else {
        img.src = "./assets/off.jpg";
    }
}
