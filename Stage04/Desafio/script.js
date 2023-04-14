alert("Iremos calcular 2 números")
let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")

let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let mult = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let rest = Number(n1) % Number(n2)

alert(`A soma de ${n1} + ${n2} é o ${sum}`)
alert(`A subtração de ${n1} - ${n2} é o ${sub}`)
alert(`A multiplicação de ${n1} * ${n2} é o ${mult}`)
alert(`A divisão de ${n1} / ${n2} é o ${div}`)
alert(`O resto de ${n1} % ${n2} é o ${rest}`)

if(rest == 0){
  alert("A soma dos dois números é par")
}else{
  alert("A soma dos dois números é impar")
}

if(n1 === n2){
  alert("Os dois números inseridos são iguais")
}else{
  alert("Os dois números inseridos são diferentes")
}