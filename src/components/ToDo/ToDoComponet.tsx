import './ToDo.scss'
import CIcon from '@coreui/icons-react';

import {  cilTrash, cilCheckAlt } from '@coreui/icons';
interface IPropsString {
    text:string,
    execute:boolean,
    func(e:React.MouseEvent,id:number):void
    funcChangeBg(id:number):void
}


const Task = (props:IPropsString) => {
    let id:number ;

    return (
        <div  className='taskRow'>
            <div style={props.execute ? {background: 'green'}:{background: 'red'}} className='task'>
                <p className='task_text'>{props.text}</p>
                <button onClick={(e) => props.func(e, id) } className='task_btn'>
                    <p>Del</p>
                    <CIcon className='task_btn_icon' icon={cilTrash} />
            </button>
            </div>
            <button onClick={()=>props.funcChangeBg(id)} className='task_btn btnOk'>
                <p>Ok!</p>
                <CIcon className='task_btn_icon' icon={cilCheckAlt} />
            </button>
        </div>
        
        
        )
    
}
export default Task
// style={props.execute ? "background-color: red;":"background-color: green;"}