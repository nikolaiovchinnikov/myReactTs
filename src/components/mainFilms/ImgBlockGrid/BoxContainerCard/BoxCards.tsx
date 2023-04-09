import FilmCard from "../FilmsCard/FilmCard";
import { useState,useEffect } from "react";
import ContainerCard from "../ContinerCard/ContinerCard";
import { getRespons } from "../../../../scripts/ajaxMetods";
interface IFilmApi {
    posterUrlPreview:string,
    filmId:number
}
let isStatus = true
const BoxCard = () => {
    const [ films, setFilms ] = useState([[],[],[],[]] as IFilmApi[][] )
    let urlFilms = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
    const splitArray = (arr:any[]):any[] => {
        const [oneArr, twoArr, threeArr, fourArr] = [[], [], [], []] as any[][];
        for (let index = 0; index < arr.length; index++) {
            if(index <= 4) {
                oneArr.push(arr[index])
            }else if(index <= 9) {
                twoArr.push(arr[index])
            }else if(index <= 14) {
                threeArr.push(arr[index])
            }else if(index <= 19) {
                fourArr.push(arr[index])
            }
            
        }
        return [oneArr, twoArr, threeArr, fourArr]
    }
    useEffect (() => {
        const getFilms = async ():Promise<void> => {
            const response = await getRespons(urlFilms)
            .catch(err => console.log(err))
            const filmItems = response.films
            const multiArr = splitArray(filmItems)
            setFilms(multiArr)
            console.log(multiArr)
        }
        if (isStatus){
            getFilms()
            isStatus = false
        }
    },[urlFilms])
   
    
    
    
    return (
                <div style={{display:'flex',flexDirection: 'column'}} className="card_block_column">
                    <ContainerCard>
                        {films[0].map((value)=> {
                            return <FilmCard className={"top shadow_top"} key={value.filmId} src={value.posterUrlPreview}/>
                        })}
                    </ContainerCard>
                    <ContainerCard>
                        {films[1].map((value)=> {
                            return <FilmCard className={"bot"} key={value.filmId} src={value.posterUrlPreview}/>
                        })}
                    </ContainerCard>
                    <ContainerCard>
                        {films[2].map((value)=> {
                            return <FilmCard className={"top"} key={value.filmId} src={value.posterUrlPreview}/>
                        })}
                    </ContainerCard>
                    <ContainerCard>
                        {films[3].map((value)=> {
                            return <FilmCard className={"bot shadow_bot"} key={value.filmId} src={value.posterUrlPreview}/>
                        })}
                    </ContainerCard>
                </div>
    )
}
export default BoxCard