function button() {
    if (document.getElementById("button").textContent.includes("pepe")) {
        document.getElementById("button").innerHTML = "View Cases studies";
    } else {
        document.getElementById("button").append("pepe");
    }
}









