import style from './Demanda.module.css'
import { filmesSobDemanda} from '../../data'


const Demanda = () => {
    return(
        <section>
            <h1 className={style.h1}>Recently Watched</h1>
            <div className={style.recente}>
        {filmesSobDemanda.map((filme, index)=>
        <div key={index} className={style.filme}>
            <img src={filme.image} alt={filme.title} />
        </div> )}
            </div>
        </section>
    )
}
export default Demanda;