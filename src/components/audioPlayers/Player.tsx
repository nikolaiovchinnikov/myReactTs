import React, {useState,useRef,useEffect} from 'react';
import PlayerElement from './AudioPlayer';
import { floor } from '../../scripts/mathScript';
import './Player.scss'
let stop:boolean = false;
const AudioPlayer = () => {
    const audioEl = useRef<HTMLAudioElement | null>(null) 
    const [stopState,setStateStop] = useState(stop)
    const [sliderState, setSliderState] = useState(audioEl)



    const slider = () => {
        if (audioEl.current)
        audioEl.current.addEventListener( 'timeupdate',() => {
           const sliderStateCopy = {...sliderState}
           setSliderState(sliderStateCopy)
        })
    }

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
                slider()
            }
        }
        setStateStop(stopStateCopy)
    }
    
    
    
    
    return (
        <div>
            <PlayerElement 
            slider={{timeUpdate:floor(sliderState.current?.currentTime),duration:floor(sliderState.current?.duration)}} 
            refAudio={audioEl} 
            funcSlider={slider} 
            funcPlay={play} 
            isStop={stopState}/>
        </div>
        
        )
}
export default AudioPlayer;