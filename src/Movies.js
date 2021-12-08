import "./Movies.css";
import Card from './Card';
import Preview from './Preview.js'
import { Link } from 'react-router-dom';

const Movies = ({movies}) => {

  const moviePosters = movies.sort((a,b) => {return a.title.localeCompare(b.title)}).map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <Card
        id = {movie.id}
        title={movie.title}
        image= {movie.poster_path}
      
        />
      </Link>
    )
  })

  return (
      <section className="movies-container">
          {moviePosters}
      </section>

  )
}

export default Movies;
