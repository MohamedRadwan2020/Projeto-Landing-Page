var setadireta = window.document.getElementById("setadireta")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function Next() {
    Leonardo.style.display = "none";
    Bruna.style.display = "flex";
    setadireta.style.display = "none";
    setaesquerda.style.display = "flex";
}
function Back() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadireta.style = "display:flex"
    setaesquerda.style = "display:none"}