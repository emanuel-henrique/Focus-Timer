export default function Controls(
    {
        btnPlay,
        btnPause,
        btnSet,
        btnStop
    }
){

    function Play()
    {
        reset()
    }
    function Pause()
    {
        reset()
    }
    function Stop()
    {
        reset()
    }

    function getMinutes()
    {
        let newMinutes = prompt("Quantos minutos?") 
        if(!newMinutes)
        {
            return false
        }

        return newMinutes
    }

    function reset()
    {
        btnPlay.classList.toggle("Hide")
        btnPause.classList.toggle("Hide")
        btnSet.classList.toggle("Hide")
        btnStop.classList.toggle("Hide")
    }

    return {
        reset,
        Play,
        Pause,
        Stop,
        getMinutes,
    }
}
