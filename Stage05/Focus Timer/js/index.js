import resetControls from "./controls.js"
import {Timer} from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSounOn = document.querySelector('.sound-on')
const buttonSounOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimerOut, 
  resetControls,
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimerOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.resetTimer()
})

buttonSounOn.addEventListener('click', function () {
  buttonSounOn.classList.add('hide')
  buttonSounOff.classList.remove('hide')
})

buttonSounOff.addEventListener('click', function () {
  buttonSounOff.classList.add('hide')
  buttonSounOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos')
  if (!newMinutes) {
    timer.resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})