import React from 'react';



import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
const Movies = props => (
  <div className="container">
    <div className="row">
    { props.results.map((movie) => {
      return (
        <div key={movie.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
            
            { movie.poster_path ?
            <img 
              className="recipe__box-img" 
              src={"https://image.tmdb.org/t/p/w440_and_h660_face"+movie.poster_path} 
              alt={movie.original_title}/>
            :
            <img 
              className="recipe__box-img" 
              src="notfound.png"
              alt={movie.original_title}/>
            }
              <div className="recipe__text">
                <h5 className="recipes__title">

                  {movie.original_title}
                </h5>
                <p className="recipes__subtitle">Rate: <span>
                  {movie.vote_average}
                </span></p>
              </div>
              <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/movie/${movie.id}`,
                  state: { movie: movie }
                }}>View Details</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Movies;