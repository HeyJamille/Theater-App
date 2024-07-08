
import { filmesDestaque } from '../../data'
import style from './FeaturedMovies.module.css'


const FeaturedMovies = () => {
  return (
    <header>
      <h1>Featured Movies</h1>
      <div className={style.filmesDestaque}>
        {filmesDestaque.map((filme, index) => (
          <div key={index} className={style.filme}>
            <img src={filme.image} alt={filme.title} />
            <div className={style.filmeInfo}>
              <h2>{filme.title}</h2>
              <p>{filme.description}</p>
              <div className={style.showtimes}>
                {filme.times.map((time) => (
                  <span>{time}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default FeaturedMovies;