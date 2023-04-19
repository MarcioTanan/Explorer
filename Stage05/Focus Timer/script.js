const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSounOn = document.querySelector('.sound-on')
const buttonSounOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function countdown(){
  setTimeout(function(){
    let seconds =  Number(secondsDisplay.textContent)

    if(seconds <=0){
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1
    countdown()
  },1000)
  
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSounOn.addEventListener('click', function() {
  buttonSounOn.classList.add('hide')
  buttonSounOff.classList.remove('hide')
})

buttonSounOff.addEventListener('click', function() {
  buttonSounOff.classList.add('hide')
  buttonSounOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos')
  minutesDisplay.textContent = minutes
})