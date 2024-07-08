import style from './Recentemente.module.css'
import { filmesAssistidosRecentemente} from '../../data'


const MovieCard = () => {
    return(
        <section>
            <h1 className={style.h1}>Recently Watched</h1>
            <div className={style.recente}>
        {filmesAssistidosRecentemente.map((filme, index)=>
        <div key={index} className={style.filme}>
            <img src={filme.image} alt={filme.title} />
        </div> )}
            </div>
        </section>
    )
}
export default MovieCard;