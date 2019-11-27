let gif = document.getElementById("gif");
gif.style.display = "none";

function toggleGif() {
    if (gif.style.display === "none") {
        gif.style.display = "block";
    } else {
        gif.style.display = "none";
    }
}