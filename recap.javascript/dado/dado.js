/*
    JS - Aula6: Jogo do dado
    @author Professor José de Assis
*/

//Math - objeto embutido no js, contém propriedades e métodos para fumções matemáticas
var sorteio = Math.floor(Math.random() * 6 + 1)
//Math floor() - arredonda número para inteiro
//Math Random() - gera número aleatório entre 0 e o número solicitado pelo dev
/*foi multiplicado 6 para q sejam gerados números entre 0 e 6, 
foi somado +1, para que a gere números alatórios a partir de 1
*/
//esturuta condicional switch:
switch (sorteio) {
    case 1:
        document.getElementById("face").src = "imagens/face1.png"
        break
    case 2:
        document.getElementById("face").src = "imagens/face2.png"
        break
    case 3:
        document.getElementById("face").src="imagens/face3.png"
        break
    case 4:
        document.getElementById("face").src="imagens/face4.png"
        break    
    case 5:
        document.getElementById("face").src="imagens/face5.png"
        break
    case 6:
        document.getElementById("face").src="imagens/face6.png"
        break
    default:
        //caso contrário
        break
}