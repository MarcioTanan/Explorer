alert("Iremos calcular a média das notas")
let name = prompt("Digite seu nome: ")
let not1 = prompt("Digite sua primeira nota: ")
let not2 = prompt("Digite sua segunda nota: ")
let not3 = prompt("Digite sua terceira nota: ")

let sum = (Number(not1) + Number(not2) + Number(not3)) / 3

sum = sum.toFixed(2)

if (sum > 6) {
alert("Parabéns, " + name + "! sua média foi de: " + sum)
}else if (sum < 3) {
  alert("Reprovado")
}else{
  alert(name + " estude para sua prova de recuperação! Sua média foi de " + sum)
}