import React, {useState,useRef,} from 'react';
import PlayerElement from './AudioPlayer';
import './Player.scss'
let stop:boolean = false;
const AudioPlayer = () => {
    // const audioEl:React.useRef<HTMLDivElement | null> = useRef(null) 
    const audioEl = useRef<HTMLAudioElement | null>(null) 
    
    // const [stopDuration, setStateDuration] = useState(audioEl.current.duration)
    
    

    const [stopState,setStateStop] = useState(stop)
    const play = () => {
        let stopStateCopy = stopState
        if (stopStateCopy) {
            stopStateCopy = false
            if (audioEl.current) {
                audioEl.current.pause() 
            }
            
        }else {
            stopStateCopy = true
            if (audioEl.current) {
                audioEl.current.play()
            }
            
            
            
           
        }
        setStateStop(stopStateCopy)
    }
    const slider = () => {

    }
    
    
    return (
        <div>
            <PlayerElement slider={audioEl.current?.duration} refAudio={audioEl} funcSlider={slider} funcPlay={play} isStop={stopState}/>
        </div>
        
        )
}
export default AudioPlayer;