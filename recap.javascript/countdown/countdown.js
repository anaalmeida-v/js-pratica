/*
JS - Aula10: Countdown
@author Professor josé de Assis
*/
var check = false

function xequeMate() {
    if (check == false) {
        var timer1 = setInterval(function(){start()}, 1000)/*função start(), sera executada a cada 1segundo(1000milis_
        segundos)*/
        var timer2 = setTimeout(function(){end()}, 13200)/*colocando um tempo de aparição da imagem da função end(), 
        isso tbm irá parar a execução infinita do gif*/
        var count = 10//contagem regressiva iniciando do 10
        function start(){//usada para montagem do contador
            soundBeep()//áudio dentro da função será exibido
            document.getElementById('time').innerHTML = count/*substitui o texto count, para o conteúdo da variável 
            count(nesse caso 10)*/
            if (count ==0){
                clearInterval(timer1)//quando count==0 o comando setInterval(), dentro de 'timer1' sera interrompido
                soundThunder()//reproduzindo som que está nessa função
                document.getElementById("fire").src = "imagens-gif/explosion.gif"/*mudando de imagem para um gif de
                explosão, a partir do id do elemento a ser modificado(nesse caso, 'fire')*/
                document.getElementById("time").innerHTML = "GAME OVER"/*mudando o valor 0, para gameover, igual foi
                feito acima do if*/
            }
            count--/*count subtrai uma unidade de seu valor, toda vez que a função dentro da variável "timer1" é 
            executada*/
        }
        check = true //impede que o valor de áudio seja executado novamente
    }
}

function soundThunder() {
    var beep = new Audio()
    beep.src = "mp3/Thunder_Crack.mp3"
    beep.play()
}

function soundBeep() {
    var beep = new Audio()
    beep.src = "mp3/Beep_Short.mp3"
    beep.play()
}

function end() {
    document.getElementById("fire").src="imagens-gif/clean.png"
}//trocando gif por imagem