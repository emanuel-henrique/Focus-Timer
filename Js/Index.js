import Controls from "./Controls.js"
import Timer from "./Timer.js"
import Sound from "./Sounds.js"
import Events from "./Events.js"

import {  
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    displayMinutes,
    displaySeconds 
} from "./Elements.js"

const sound = Sound()

const controls = Controls(
    {
        btnPlay,
        btnPause,
        btnSet,
        btnStop
    }
)

const timer = Timer(
    {
        displayMinutes,
        displaySeconds,
        resetCotrols: controls.reset
    }
)

Events({timer, controls, sound})