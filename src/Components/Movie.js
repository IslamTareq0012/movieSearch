import React from 'react';

import { Link } from "react-router-dom";

class Movie extends React.Component {
  state = {
    activeMovie: {}
  }
  componentDidMount = async () => {


  }
  render() {
    const movie = this.props.location.state.movie;
    console.log("nfkjshdfeirf", movie);
    return (
      <div className="container">
        { this.state.activeMovie.length !== 0 &&
          <div className="active-recipe">


            {movie.poster_path ?
              <img className="active-recipe__img" src={"https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path} alt={movie.title} />
              :
              <img className="active-recipe__img" src="notfound.png" alt={movie.title} />
            }


            <h3 className="active-recipe__title">{movie.title}</h3>
            <h4 className="active-recipe__publisher">
              Rate: <span>{movie.vote_average}</span>
            </h4>
            <p className="active-recipe__website">Overview:
              <span><a href={movie.sourceUrl}>{movie.overview}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Movie;