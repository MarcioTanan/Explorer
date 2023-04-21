export default function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
  resetControls,
}){

  
  let timerTimerOut
  let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if (minutes + seconds <= 0) {
      resetControls()
      updateDisplay()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function updateMinutes(newMinutes) {
  minutes = newMinutes
}

function hold() {
  clearTimeout(timerTimerOut)
}

return{
  countdown,
  reset,
  updateDisplay,
  updateMinutes,
  hold
}
}
