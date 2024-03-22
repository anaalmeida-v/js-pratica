/*
JS - Aula7: Tabuada
@author Professor José de Assis
*/

var valor = 1

for (var i = 1; i < 11; i++) {//variável i vale 1(representa o início do laço)
    // i < 11(determina o fim do laço, no caso, terminará em 10)
    /*i++ é um incremento, mesma coisa que i=1+1, cada vez que o laço rodar i valerá +1, ex.: prox laço i=2+1, será
    assim até que o resultado seja 10*/
    document.write('<hr>' + 'Tabuada do ' + i + '<br>')//representará qual será a próxima tabuada
    for (var j = 1; j < 11; j++) {//mesmo esquema do laço acima, porém, agora a variável é j
        document.write(i + " x " + j + ' = ' + (i * j) + '<br>')
        /*
        i é o valor da tabuada
        x representa o vezes na tabuada
        j é o valor que vai ser multiplicado com o valor da tabuada
        = representa o igual na tabuada
        (i * j) resultado da multiplicação
         */
    }
}/*o primeiro laço será exibido, em seguido o laço seguinte, e assim sucessivamente até que o resultado final das
 variáveis i e j sejam iguais 10*/