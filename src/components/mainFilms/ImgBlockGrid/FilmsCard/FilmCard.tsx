import './FilmCard.sass';
interface IFilmCard {
  src:string,
  className:string

}
const FilmCard = ({src,className}:IFilmCard ) => {
  return (
    <div style={{backgroundImage:`url(${src})`}} className={'card '+ className}>
    </div>
  )
}
export default FilmCard