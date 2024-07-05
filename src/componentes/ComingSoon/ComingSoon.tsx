import './ComingSoon.css'
import { filmesEmBreve } from '../../data'


const ComingSoon = () => {
    return(
        <section>
            <h1>Coming Soon</h1>
            <div className='em-breve'>
        {filmesEmBreve.map((filme, index)=>
        <div key={index} className='filme'>
            <img src={filme.image} alt={filme.title} />
        </div> )}
            </div>
        </section>
    )
}
export default ComingSoon;