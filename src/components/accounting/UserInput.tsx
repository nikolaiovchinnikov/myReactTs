interface IUserInput {
    formClick (e:React.FormEvent<HTMLFormElement>):void
}

const UserInput = ({formClick}:IUserInput) => {
    return (
        <form onSubmit={(e)=> formClick(e)} className='boxApp_inputs_btn'>
            <div className="select">
                <input className='boxApp_inputs_btn_itemName' type="text" />
                <select defaultValue="">
                    <option value="" disabled>Выберите тип</option>
                    <option className="green" value="Машина">Машина</option>
                    <option className="red" value="Еда">Еда</option>
                    <option className="yellow" value="Развлечения">Развлечения</option>
                </select>
            </div>
            
            <input className='boxApp_inputs_btn_itemCost' type="text" />
            <p className='boxApp_inputs_btn_itemText'>KZT</p>
            <button type="submit" className='boxApp_inputs_btn_itemBtn'>Add</button>
        </form>
    )
}
export default UserInput