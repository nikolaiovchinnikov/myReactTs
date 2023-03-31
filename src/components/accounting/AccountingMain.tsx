import React,{useState} from 'react';
import UserInput from './UserInput';
import './main.scss'
import WindowTexts from './WindowText';
let id = 0
interface IAccounting {
    id:number,
    type:string,
    name:string,
    cost:string
}
const LIST_TASKS:IAccounting[] = []

const AccountingMain = () => {
    const [stateTasks, setTasks] = useState(LIST_TASKS)
    const userClick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let form      = e.target as HTMLFormElement
        let inputName = form[0]  as HTMLInputElement
        let inputCost = form[2]  as HTMLInputElement
        let inputSelect = form[1]  as HTMLSelectElement
        const copyStateTask = [...stateTasks]
        copyStateTask.push({id:id,type:inputSelect.value,name:inputName.value,cost:inputCost.value})
        setTasks(copyStateTask)
        id++
        console.log(inputSelect)
    }
    const funcDelText = (id:number) => {
        const StateListUpdateCopy = stateTasks.filter( value => { return value.id !== id})
        setTasks(StateListUpdateCopy)
    }
    const sum = stateTasks.reduce(function(accumulator, currentValue) {
        return accumulator + parseInt(currentValue.cost) ;
      }, 0);
      let EntertainmentAmount:number = stateTasks.reduce(function(accumulator, currentValue) {
        if (currentValue.type === "Развлечения" ){
            return accumulator + 1 ;
        }return accumulator ;
      }, 0);
      let FoodAmount:number = stateTasks.reduce(function(accumulator, currentValue) {
        if (currentValue.type === "Еда" ){
            return accumulator + 1 ;
        }return accumulator ;
      }, 0);
      let CarAmount:number = stateTasks.reduce(function(accumulator, currentValue) {
        if (currentValue.type === "Машина" ){
            return accumulator + 1 ;
        }return accumulator ;
      }, 0);
      let sumItem = EntertainmentAmount + FoodAmount + CarAmount
      let CarPercent = CarAmount / sumItem * 100
      let FoodPercent = FoodAmount / sumItem * 100
      let EntertainmentPercent = EntertainmentAmount / sumItem * 100
    return (
        <div className='boxApp'>
            <UserInput formClick={userClick}/>
            <div className="window">
                {stateTasks.map(value => {return <WindowTexts 
                    key={value.id}
                    delText={() => funcDelText(value.id)}
                    cost={value.cost}
                    name={value.name}
                    type={value.type}/>})}
            </div>
            <div className='totalSum'>
                <div className='totalSumBox'>
                    <h2 className='totalSumBoxTitle'>Общая сумма:</h2>
                    <h2 className='totalSumBoxScore'>{sum}</h2>
                </div>
            </div>
            <div className='graph'>
                <div style={{width: `${EntertainmentPercent}%`}} className='Entertainment yellow'></div>
                <div style={{width: `${FoodPercent}%`}} className='Food red'></div>
                <div style={{width: `${CarPercent}%`}} className='Car green'></div>
            </div>
        </div>
        )
}
export default AccountingMain