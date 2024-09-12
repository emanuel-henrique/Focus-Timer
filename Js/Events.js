import {  
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    btnSoundOn,
    btnSoundOff,
} from "./Elements.js"

export default function Events({timer, controls, sound})
{
    btnPlay.addEventListener('click', function() {
        controls.Play()
        timer.countDown()
        sound.pressButton()
    })
    btnPause.addEventListener('click', function() {
        controls.Pause()
        timer.Pause()
        sound.pressButton()
    })
    btnStop.addEventListener('click', function() {
        controls.Stop()
        timer.reset()
        sound.pressButton()
    })
    
    btnSoundOn.addEventListener('click', function() {
        btnSoundOn.classList.toggle("Hide")
        btnSoundOff.classList.toggle("Hide")
        sound.bgAudio.pause()
    })
    
    btnSoundOff.addEventListener('click', function() {
        btnSoundOff.classList.toggle("Hide")
        btnSoundOn.classList.toggle("Hide")
        sound.bgAudio.play()
    })
    
    btnSet.addEventListener('click', function() {
        let newMinutes = controls.getMinutes()
        if(!newMinutes)
        {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
}