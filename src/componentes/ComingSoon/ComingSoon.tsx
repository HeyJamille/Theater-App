import style from './ComingSoon.module.css'
import { filmesEmBreve } from '../../data'


const ComingSoon = () => {
    return(
        <section>
            <h1 className={style.h1}>Coming Soon</h1>
            <div className={style.emBreve}>
        {filmesEmBreve.map((filme, index)=>
        <div key={index} className={style.filme}>
            <img src={filme.image} alt={filme.title} />
        </div> )}
            </div>
        </section>
    )
}
export default ComingSoon;