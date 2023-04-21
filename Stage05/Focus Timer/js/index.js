import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"


import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonSounOn,
  buttonSounOff,
  buttonStop,
  minutesDisplay,
  secondsDisplay, 
 } from "./elements.js"



 let minutes = Number(minutesDisplay.textContent)


const controls = Controls(
  {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
  })
  
  const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
  })
  
  const sound = Sound()

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSounOn.addEventListener('click', function () {
  buttonSounOn.classList.add('hide')
  buttonSounOff.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSounOff.addEventListener('click', function () {
  buttonSounOff.classList.add('hide')
  buttonSounOn.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
 timer.updateMinutes(newMinutes)
})