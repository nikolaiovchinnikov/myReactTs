import CIcon from '@coreui/icons-react';
import {  cilX } from '@coreui/icons';
interface IWindow {
    delText (id: number):void,
    cost:string,
    name:string,
    type:string
}
const WindowTexts = ({delText, cost, name, type}:IWindow)=> {
    let id:number ;
    let bgClass = "default";
    if(type === "Машина" ){
        bgClass = "green"
    }else if(type === "Еда" ){
        bgClass = "red"
    }else if(type === "Развлечения"){
        bgClass = "yellow"
    }

    return (
        <div className={'itemTEXT ' + bgClass}>
            <p className="name">{name}</p>
            <div className="cost_btn_box">
                <p className="cost">{`${cost} KZT`}</p>
                <button className="del" onClick={()=>delText(id)}>
                    <CIcon className='task_btn_icon' icon={cilX} />
                </button>
            </div>

        </div>
    )
}
export default WindowTexts