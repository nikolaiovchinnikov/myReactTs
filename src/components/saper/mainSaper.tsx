import React ,{useState}  from 'react';
import BlockItem from './Saper';
import { getRandomArbitrary } from '../../scripts/Random';
const item:JSX.Element[] = []

const MainSaper = () => {
    const [itemStete, setItemState] = useState(item)
    const itemCheck = (e:React.MouseEvent,isCheck:boolean) => {
        e.stopPropagation()
        const blockItem = e.currentTarget as HTMLDivElement
        if(isCheck){
            blockItem.classList.add('trueClass')
        }else{
            blockItem.classList.add('falseClass')
        }
    }
    const getItemBlock = () => {
        console.log(itemStete)
        if(itemStete.length === 0){
            const copyitemStete = [...itemStete]
            let start = 0
            let stop = 36
            let randomNamber = getRandomArbitrary(start,stop)
            for (let index = start; index < stop; index++) {
                if( index === randomNamber ){
                    copyitemStete.push
                    (
                    <BlockItem 
                    checked={(e:React.MouseEvent) => itemCheck(e,true)}
                    key={index}/>
                    )
                } else{
                copyitemStete.push
                (
                <BlockItem
                checked={(e:React.MouseEvent) => itemCheck(e,false)} 
                key={index}/>
                )
                }}setItemState(copyitemStete)
                console.log(itemStete.length)
            }
        }
    return (
        <div className='container'>
            <div className='boxItem'>
                {itemStete}
            </div>
            <button className='btn' onClick={getItemBlock}></button>
        </div>
        )
    }
export default MainSaper;
