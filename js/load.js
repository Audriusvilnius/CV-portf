const newScale = "scale(0.5)";
const defScale = "scale(1)";
const defTransition = "350ms";

function load(a, b) {
    document.getElementById("yourImgId1").style.transform = a;
    document.getElementById("yourImgId1").style.transitionDuration = "3s";
    document.getElementById("yourImgId2").style.transform = b;
    document.getElementById("yourImgId2").style.transitionDuration = "3s";

    setTimeout(() => { load(b, a) }, 3000);
}