// Importações necessárias
import React from 'react';
import { filmesDestaque } from '../../data'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <h1>Featured</h1>
      <div className="featured-movies">
        {filmesDestaque.map((filme, index) => (
          <div key={index} className="movie">
            <img src={filme.image} alt={filme.title} />
            <div className="movie-info">
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

export default Header;
