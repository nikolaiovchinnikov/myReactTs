import "./IdItemFilm.sass"
import FilmCard from "../ImgBlockGrid/FilmsCard/FilmCard";
import { useState,useEffect } from "react";
import { getRespons } from "../../../scripts/ajaxMetods";

interface IFilmApi {
    posterUrlPreview:string,
    description:string,
    nameRu:string,
    year:number,
}
let isStatus = true
const IdItemFilm = () => {
    const [ IdFilms, setIdFilms ] = useState({} as IFilmApi)
    let urlPremiere = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/301'
    useEffect (() => {
        const getIdFilms = async ():Promise<void> => {
            const response = await getRespons(urlPremiere)
            .catch(err => console.log(err))
            setIdFilms(response)
            console.log(response)
        }
        if(isStatus){
            getIdFilms()
            isStatus = false
        }
    },[urlPremiere])
    return (
        <div className="titleFilms container">
            <div className="titleFilms_blockInfo">
                <FilmCard className={"shadow"} src={IdFilms.posterUrlPreview}/>
                <div className="titleFilms_blockInfo_text">
                    <div className="blockTop">
                        <div>
                            <h2 className="titleFilms_blockInfo_text_top">{IdFilms.nameRu}</h2>
                            <p className="titleFilms_blockInfo_text_yers"><span>{IdFilms.year}</span> г.</p>
                        </div>
                        <div>
                            <h2 className="rayting">7</h2>
                            <p className="rayting">fffff</p>
                        </div>
                    </div>
                    
                    <p className="titleFilms_blockInfo_text_bot">{IdFilms.description}</p>
                    <div className="titleFilms_blockInfo_text_btns">
                        <button className="titleFilms_blockInfo_text_btns_item"></button>
                        <button className="titleFilms_blockInfo_text_btns_item"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IdItemFilm