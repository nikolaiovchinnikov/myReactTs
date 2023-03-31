import React  from 'react';
import CIcon from '@coreui/icons-react';
import {  cilMediaPlay, cilMediaPause } from '@coreui/icons';
import Slyider from './slyider';
import './Player.scss'


interface ISlider {
    timeUpdate:number,
    duration:number 
}
interface IPlayer {
    isStop : boolean;
    refAudio : React.MutableRefObject<HTMLAudioElement | null>;
    slider:ISlider;
    funcPlay():void;
    funcSlider():void;
}

const PlayerElement = (props:IPlayer) => {
    const start = () =>{
        props.funcPlay()

    }
    return (
        <div className='box_player' >
            <div className='player'>
                <div className='player_img'>
                    <img src="" alt="" />
                </div>
                <div className='player_title'>
                    <h3> Song</h3>
                    <p> николай</p>
                </div>
                <Slyider isStop={props.isStop} timeUpdate={props.slider.timeUpdate} duration={props.slider.duration} />
                <div className='player_mainInterfase'>
                    {/* <div className='player_mainInterfase_btn'><CIcon icon={cilMediaPlay}/></div> */}
                    <button 
                    onClick={start}
                    className='player_mainInterfase_btn'
                    >
                    <CIcon icon={ props.isStop? cilMediaPlay : cilMediaPause }/>
                    </button>
                    {/* <div className='player_mainInterfase_btn'><CIcon icon={cilMediaPlay}/></div> */}
                </div>
            </div>

            <audio ref={props.refAudio} src="./music/some-track.mp3" >
            </audio>
        </div>
        )
}

export default PlayerElement
