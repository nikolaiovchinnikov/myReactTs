import './header.sass'
import CIcon from '@coreui/icons-react';
import { cilHamburgerMenu, cilSearch } from '@coreui/icons';


interface IHeader {
    isColorMod:boolean
    colorMod():void
}
const Header = ({isColorMod, colorMod}:IHeader) => {
    let classColor = isColorMod?'dark':'white'
    let btnClass = ['btnColor', classColor]
    return (
        <header className='hederColor'>
            <div className='header container'>
            <div className='header_BurgerMenu' >
                <CIcon className='header_BurgerMenu_icon' icon={cilHamburgerMenu}/>
            </div>
            <div className='header_textImgBox'>
                <img className='header_Img' src="img/free-icon-frame-4144614.png" alt="" />
                <h3 className='header_text'>
                    Поиск кино
                </h3>
            </div>
            
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <button className='header_search_btn'>
                    <CIcon className='header_search_btn_icon' icon={cilSearch}/>
                </button>
            </div>
                    
            <button className={btnClass.join(" ")} onClick={colorMod}>
                {isColorMod?'Темный режим':'Светлый режим'}
            </button>
           </div>
        </header>
                
    )
}
export default Header