import React  from 'react';
import './saper.scss'

interface IBlockItem {
    checked(e:React.MouseEvent,isCheck:boolean):void
}

const BlockItem = ({checked}: IBlockItem) => {
    let isCheck:boolean 
    return (
        <div onClick={(e)=>checked(e , isCheck)} className='block' >
            
        </div>
        )
}

export default BlockItem
