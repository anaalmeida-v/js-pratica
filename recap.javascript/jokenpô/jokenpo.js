/*
JS - Aula12 Jokenpô
@author Professor josé de Assis
*/

function jogar() {
    if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false &&
        document.getElementById("tesoura").checked == false) {
        //checked - verifica se opção foi preenchida(nesse caso, o radio button)
        alert('Selecione uma opção')
    } else {
        //lógica principal
        var sorteio = Math.floor(Math.random() * 3)//será sorteado um número aleatório de 0 a 3
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "imagens/pcpedra.png"/*caso o número seja 0, 
                será exibida "pcpedra.png", e assim em diante*/
                break
            case 1:
                document.getElementById("pc").src = "imagens/pcpapel.png"
                break
            case 2:
                document.getElementById("pc").src = "imagens/pcpedra.png"
                break
        }
        //verificar vencedor ou declarar empate
        if ((document.getElementById('pedra').checked == true && sorteio == 0) ||
            (document.getElementById('papel').checked == true && sorteio == 1) ||
            (document.getElementById('tesoura').checked == true && sorteio == 2)) {
            document.getElementById('placar').innerHTML = "Empate" /*"Empate" será exibido no elemento em que o Id
            ('placar'), se encontra*/
        }
        else if ((document.getElementById('pedra').checked == true && sorteio == 2) ||
            (document.getElementById('papel').checked == true && sorteio == 0) ||
            (document.getElementById('tesoura').checked == true && sorteio == 1)) {
            document.getElementById('placar').innerHTML = "Jogador Venceu"
        }
        else {
            document.getElementById('placar').innerHTML = "Computador Venceu"

        }
    }
}
function resetar() {
    document.getElementById("pc").src = "imagens/pc.png"//exibe imagem
    document.getElementById("placar").innerHTML = "" //limpa radio-button
}