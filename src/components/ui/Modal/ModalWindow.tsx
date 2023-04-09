import { ReactElement } from 'react'
import './modalStyle.scss'
interface Ibtn {type: string, label: string, clicked: () => void}
interface IModal {
    children:ReactElement,
    title:string,
    btns:Ibtn[]

}
const ModalWindow = ({children, title, btns}:IModal) => {
    return (
        <div className="MODAL">
            <h4>{title}</h4>
            {children}
            <div className='MODAL_btns'>
                {
                btns.map(value => {return <button 
                style={{backgroundColor:value.type}} 
                className="btn" 
                onClick={value.clicked}>
                    {value.label}</button>})
                }
            </div>
        </div>
    )
}
export default ModalWindow