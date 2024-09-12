import Sound from "./Sounds.js"

export default function Timer(
    {
        displayMinutes,
        displaySeconds,
        resetCotrols,
    }
){
    let timerTimeOut
    let minutes = Number(displayMinutes.textContent)

    function updateDisplay(newMinutes, seconds)
    {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds 
        displayMinutes.textContent = String(newMinutes).padStart(2, "0")
        displaySeconds.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset()
    {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function countDown()
    {
        timerTimeOut = setTimeout(function() {
    
            let seconds = Number(displaySeconds.textContent)
            let minutes = Number(displayMinutes.textContent)
            let isTimerFinished = (minutes <= 0 && seconds <= 0)

            updateDisplay(minutes, 0)
    
            if(isTimerFinished)
            {
                resetCotrols()
                updateDisplay()
                Sound().timeEnd()
                return
            }
    
            if(seconds <= 0){
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))
                
            countDown()
        }, 1000)
    }

    function updateMinutes(newMinutes)
    {
        minutes = newMinutes
    }

    function Pause()
    {
        clearTimeout(timerTimeOut)
    }

    return {
        countDown,
        reset,
        updateDisplay,
        updateMinutes,
        Pause
    }
}