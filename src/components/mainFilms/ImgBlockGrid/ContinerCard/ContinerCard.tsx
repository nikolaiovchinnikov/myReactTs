import './container_card.sass'
import { ReactElement } from 'react'
interface IContainerCard {
    children:ReactElement []
}
const ContainerCard = ({children}:IContainerCard) => {
    return (
        <div className='container_card'>
            {children}
        </div>
    )
}
export default ContainerCard