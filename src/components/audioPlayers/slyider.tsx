import React  from 'react';
import './Player.scss'
let clear: NodeJS.Timer | boolean = false
let state:number = 0
const widthLaine = 200
interface ISlider {
    isStop:boolean
    timeUpdate:number,
    duration:number 
}
const Slyider = (props:ISlider) => { 
    if(props.isStop && clear === false) {
         clear = setInterval(() =>{
            state +=  widthLaine / props.duration 
            
        },1000)
    }
    return ( 
        <div className='player_loadingBar'>
            <div style={{width:`${widthLaine}px`}} className='player_loadingBar_laiine'>
                <div 
                    style={{left: `${state}px`}}
                    className='player_loadingBar_laiine_dot'>
                </div>
            </div>
        </div>
)}

export default Slyider