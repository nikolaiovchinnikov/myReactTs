import React  from 'react';
import CIcon from '@coreui/icons-react';
import {  cilMediaPlay, cilMediaPause } from '@coreui/icons';
import './Player.scss'
interface IPlayer {
    isStop : boolean;
    refAudio : React.MutableRefObject<HTMLAudioElement | null>;
    slider:number | undefined;
    funcPlay():void;
    funcSlider():void;
}

const PlayerElement = (props:IPlayer) => {
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
                <div className='player_loadingBar'>
                    {props.slider}
                </div>
                <div className='player_mainInterfase'>
                    {/* <div className='player_mainInterfase_btn'><CIcon icon={cilMediaPlay}/></div> */}
                    <button 
                    onClick={props.funcPlay}
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
