var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function RolarDireita(){
    Leonardo.style= "display: none"
    Bruna.style= "display: flex"  
    setaDireita.style= "display: none"
    setaEsquerda.style= "display: flex"
}

function RolarEsquerda(){
    Leonardo.style= "display: flex"
    Bruna.style= "display: none"  
    setaDireita.style= "display: flex"
    setaEsquerda.style= "display: none"
}