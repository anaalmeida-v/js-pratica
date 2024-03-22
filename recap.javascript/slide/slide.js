/*
    JS - Aula9: Simples SLIDE SHOW
    @author Professor José de Assis
*/
var intervalo = 2500
//criar uma variável para o intervalo, é uma forma de economizar tempo caso precisa mudar o valor

function slide1() {
    document.getElementById('banner').src="imagens/banner1.jpg"
    setTimeout("slide2()", intervalo)
}

function slide2() {
    document.getElementById('banner').src="imagens/banner2.jpg"
    setTimeout("slide3()", intervalo)
}

function slide3() {
    document.getElementById('banner').src="imagens/banner3.jpg"
    setTimeout("slide1()", intervalo)
}

//a última função sempre chama a primeira