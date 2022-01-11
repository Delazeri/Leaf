 //Menu
 function mouseOuver1(params) {
    document.getElementById('home').style.textDecoration = "underline"
}

function mouseOuver2(params) {
    document.getElementById('nossa_historia').style.textDecoration = "underline"
}

function mouseOuver3(params) {
     document.getElementById('jogos').style.textDecoration = "underline"
}

function mouseOuver4(params) {
     document.getElementById('fele_conosco').style.textDecoration = "underline"
}

function mouseOut1(params) {
    document.getElementById('home').style.textDecoration = "none"
}

function mouseOut2(params) {
     document.getElementById('nossa_historia').style.textDecoration = "none"
}

function mouseOut3(params) {
    document.getElementById('jogos').style.textDecoration = "none"
}

function mouseOut4(params) {
     document.getElementById('fele_conosco').style.textDecoration = "none"
}

function clickMuda(params) {
     document.getElementById('teste').src = "img/campo.png"
}

var intervalo = 4000

function slide1(params) {
    document.getElementById('banner').src = "img/milho.png"
    setTimeout("slide2()",intervalo);
}

function slide2(params) {
    document.getElementById('banner').src = "img/campo.png"
    setTimeout("slide3()",intervalo);
}

function slide3(params) {
    document.getElementById('banner').src = "img/lavoura.png"
    setTimeout("slide1()",intervalo);
}