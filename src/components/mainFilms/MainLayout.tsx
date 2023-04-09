import { useState } from "react";
import BoxCard from "./ImgBlockGrid/BoxContainerCard/BoxCards";
import './MainLayout.sass'
import ListsFilm from "./ListsFilms/Lists";
import Header from "./header/Header";
import IdItemFilm from "./IdItemFilm/IdItemFilm";


const MainFilmPage = () => {
    const [isColorMod, setColor] = useState(false)
    const colorMod = () => {
        let copyIsColor = isColorMod
        if (copyIsColor){
            copyIsColor = false
        }else {
            copyIsColor = true
        }
        setColor(copyIsColor)
    }

    return (
        <div className={isColorMod?'white':'dark'}>
            <div >
                <Header colorMod={colorMod} isColorMod={isColorMod} />
                <IdItemFilm/>
                <BoxCard/>
                <ListsFilm/>
            </div>
        </div>
    )
}
export default MainFilmPage