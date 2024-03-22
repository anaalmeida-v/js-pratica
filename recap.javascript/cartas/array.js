/**
* JS - Aula14: Jogo de Cartas
  @author José de Assis
*/

var nipes = ['♥','♦','♣','♠']
var faces = ['A', '2', '3', '4', '5', '6']
var nipe = nipes[Math.floor(Math.random() * 4)]//sorteando 4 números iniciando do 0
var face = faces[Math.floor(Math.random() * faces.length)]
document.write("<hr>" + face + nipe + "</h1>")