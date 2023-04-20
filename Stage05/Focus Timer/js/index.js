import Controls from "./controls.js"
import Timer from "./timer.js"

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

const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimerOut,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  clearTimeout(timerTimerOut)
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
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
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.resetTimer()
     return
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)

})