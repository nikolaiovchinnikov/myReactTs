import React, {useState} from 'react';
import Loto from './ComponentLoto';
import listRandom from './random';
import { getRandomArbitrary } from './random'
const listException:Set<number> = new Set([]) 
let count:number = 5



const MainLotoUseState= () => {
    const [listNumber, setListNumber] = useState(listRandom)
    const random = () => {
            if (listException.size >= 75){
                return
            }
            let listNuberCopy:number[] = listNumber
            while (listException.size < count  ) {
              listException.add(getRandomArbitrary(1,80))
            }
            let temporarysheet:number[] = []
            let item:number = 0
            listException.forEach((v) => {
              item ++
              if (item > count - 5  ) {
                temporarysheet.push(v)
                
              }
            })
            listNuberCopy = temporarysheet
            setListNumber(listNuberCopy)
            count += 5
          }
        
    return (
        <div className='container' >
            <Loto list={listNumber} func={random}/>
        </div>
    )
}



export default MainLotoUseState;