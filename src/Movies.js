import "./Movies.css";
import Card from './Card';
import Preview from './Preview.js';
import {NavLink} from 'react-router-dom';

const Movies = ({movies, movieDetails}) => {

  const moviePosters = movies.sort((a,b) => {return a.title.localeCompare(b.title)}).map(movie => {
    return (
      <nav>
      {movies.map(movie => <NavLink to={`/${movie.id}`} className='nav'>        
        <Card
          id = {movie.id}
          title={movie.title}
          image= {movie.poster_path}
          key={movie.id}
          movieDetails={movieDetails}
        />
      </NavLink>)}
    </nav>

    )
  })

  return (
      <section className="movies-container">
          {moviePosters}
      </section>

  )
}

export default Movies;
