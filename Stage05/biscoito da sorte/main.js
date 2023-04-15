const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const openCookie = document.querySelector("#img1")

openCookie.addEventListener("click", luckMessage)
btnReset.addEventListener("click", luckMessage)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    luckMessage()
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    luckMessage()
  }
}
)

function luckMessage() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 10)

  switch (randomNumber) {
    case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
      break
    case 1: screen2.querySelector("p").innerText = "É preciso amar as pessoas como se não houvesse amanhã"
      break
    case 2: screen2.querySelector("p").innerText = "Nosso suor sagrado é bem mais belo que esse sangue amargo"
      break
    case 3: screen2.querySelector("p").innerText = "A tempestade que chega é da cor dos teus olhos castanhos"
      break
    case 4: screen2.querySelector("p").innerText = "Então me abraça forte, me diz mais uma vez que já estamos distantes de tudo"
      break
    case 5: screen2.querySelector("p").innerText = "Sempre em frente, não temos tempo a perder"
      break
    case 6: screen2.querySelector("p").innerText = "Como um anjo caído, fiz questão de esquecer que mentir pra si mesmo é sempre a pior mentira"
      break
    case 7: screen2.querySelector("p").innerText = "Já não me preocupo se eu não sei por que, às vezes o que eu vejo quase ninguém vê"
      break
    case 8: screen2.querySelector("p").innerText = "O infinito é realmente um dos deuses mais lindos"
      break
    case 9: screen2.querySelector("p").innerText = "Sei que às vezes uso palavras repetidas, mas quais são as palavras que nunca são ditas?"
      break
    case 10: screen2.querySelector("p").innerText = "E é só você que tem a cura pro meu vício de insistir nessa saudade que eu sinto de tudo que eu ainda não vi"
      break
    default:
      break
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}