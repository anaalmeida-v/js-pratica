/*
 *  JS - Aula8: Lâmpada  
    @author Professor José de Assis
 */

function on() {
    document.getElementById("lamp").src = "imagens/on.jpg"
}

function off() {
    document.getElementById("lamp").src = "imagens/off.jpg"
}

function blink() {
    var intervalo = 0
    var contador = 0
    while (contador < 10) {
        intervalo += 300//"+=" soma 300 a cada loop, no próximo loop essa variável valerá 600
        setTimeout("document.getElementById('lamp').src='imagens/on.jpg'", intervalo)
        intervalo += 300//a foto da lâmpada será trocada de 30 em 30 segundos, o valor é determinado em  milissegundos
        setTimeout("document.getElementById('lamp').src='imagens/off.jpg'", intervalo)
        contador++
    }
}
//setTimout("acao", milissegundos)

/* estruturas infinitas - enquanto a condição for verdadeira executa
while(condicao){

}
do {
} while(condição)

estrutura do while sempre executa 1 vez o q está no laço independente da condição
se a condição for falsa ele não faz o loop, para no primeiro
*/