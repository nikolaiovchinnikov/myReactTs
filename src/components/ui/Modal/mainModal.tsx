import './App.scss';

import ModalWindow from './ModalWindow';
import {useState} from 'react';
const modal = () => {
    const [isState, setIsState] = useState(true)
    const continued = () => {
        
    }
    const closed = () => {
        let copyisState = isState
        copyisState = false
        setIsState(copyisState)
    }

    return (
        <div className='container'>
            { isState && 
            <ModalWindow
                title={'ИНФОРМАЦИЯ'}
                btns = {[
                    {type: 'blue', label: 'Continue', clicked: continued},
                    {type: 'red', label: 'Close', clicked: closed}
                  ]}
                >
                <p>ЗАДАЧА ВЫПОЛНЕНА</p>
                </ModalWindow>
            }
        </div>
        )
    }
export default modal;
