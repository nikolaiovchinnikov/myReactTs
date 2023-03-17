import './Loto.scss'
interface LotoProps {
    list: number[],
    func():void

  }
const Loto = ( props: LotoProps) => {
    return (
        <div className='Loto'>
            <div className='Loto_list'>
                <p id='loto:1' className='Loto_list_item'>{props.list[0]}</p>
                <p id='loto:2' className='Loto_list_item'>{props.list[1]}</p>
                <p id='loto:3' className='Loto_list_item'>{props.list[2]}</p>
                <p id='loto:4' className='Loto_list_item'>{props.list[3]}</p>
                <p id='loto:5' className='Loto_list_item'>{props.list[4]}</p>
            </div>
            <button
                    onClick={ props.func } 
                    id='btnLoto' 
                    className='Loto_btn'>
                    Новое число
            </button>
        </div>
        )
    
}
export default Loto