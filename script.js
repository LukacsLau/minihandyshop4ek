const btnKaufen = document.getElementById("btnKaufen");
const meldung = document.getElementById("meldung");

btnKaufen.addEventListener("click", function () {
    meldung.textContent = "Mountainbike wurde in den Warenkorb gelegt!";
});