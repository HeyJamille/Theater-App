import React from 'react';
import { filmesDestaque } from '../../data'
import './FeaturedMovies.css'

const FeaturedMovies: React.FC = () => {
  return (
    <header>
      <h1>Featured Movies</h1>
      <div className="filmes-destaque">
        {filmesDestaque.map((filme, index) => (
          <div key={index} className="filme">
            <img src={filme.image} alt={filme.title} />
            <div className="filme-info">
              <h2>{filme.title}</h2>
              <p>{filme.description}</p>
              <div className="showtimes">
                {filme.times.map((time, idx) => (
                  <span key={idx}>{time}</span>
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