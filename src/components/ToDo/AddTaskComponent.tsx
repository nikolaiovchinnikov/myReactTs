import './ToDo.scss'
import CIcon from '@coreui/icons-react';

import {  cilTask } from '@coreui/icons';
import React from 'react';

interface addTask {
    func(e:React.MouseEvent): void;
}



const AddTask = (props:addTask) => {
    return (
        <div className='addTask'>
            <input className='addTask_input'  type="text" />
            <button onClick={(e) => props.func(e)} className='task_btn'>
                <p>Add</p>
                <CIcon  className='task_btn_icon' icon={cilTask} />
            </button>
        </div>
        )
    
}
export default AddTask