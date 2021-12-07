import "./Movies.css";
import Card from './Card';
import Preview from './Preview.js'
import { useParams, Link } from 'react-router-dom';

const Movies = ({movies, movieDetails}) => {

  const previewMovie = useParams().movieId;
  console.log(movieDetails);

  const moviePosters = movies.sort((a,b) => {return a.title.localeCompare(b.title)}).map(movie => {
    return (
      <Link to={`/${movie.id}`}>
        <Card
        id = {movie.id}
        title={movie.title}
        image= {movie.poster_path}
        key={movie.id}
        movieDetails={movieDetails}
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
