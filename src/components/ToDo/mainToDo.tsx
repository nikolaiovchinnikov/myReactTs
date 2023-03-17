import React, {useState} from 'react';
import './ToDo.scss'
import Task from './ToDoComponet'
import AddTask from './AddTaskComponent'
let id:number = 1
type IListToDo = {id:number, text:string,execute:boolean}[]
const listToDo:IListToDo = []
const ToDo = () => {
    const [StateListToDo,SetStetelistToDo] = useState(listToDo)
    const Tasks = StateListToDo.map( value => {
        return <Task 
        func={(e:React.MouseEvent) => deleteTask(e , value.id)}
        funcChangeBg={() => executeBg(value.id)}
        execute={value.execute}
        text={value.text}
        key={value.id}/>
    })
    const deleteTask = (e:React.MouseEvent,id:number) => {
        const StateListToDoCopy = StateListToDo.filter( value => { return value.id !== id})
        SetStetelistToDo(StateListToDoCopy)
    }
    const addTask = (e:React.MouseEvent) => {
        e.stopPropagation()
        let input = e.currentTarget.previousSibling as HTMLInputElement
        let StateListToDoCopy = StateListToDo.slice()
        StateListToDoCopy.push({id: id, text: input.value, execute:false})
        SetStetelistToDo(StateListToDoCopy)
        id++
    }
    const executeBg = (id:number) => {
        const StateListToDoCopy = StateListToDo.map( value => {
            if(id === value.id){
                value.execute = true
            }
            return value
            })
        SetStetelistToDo(StateListToDoCopy)
    }
    return (
        <div className='todo'>
            <AddTask func={addTask} />
            {Tasks}
        </div>
        )
}
export default ToDo