import "./Movies.css";
import Card from './Card';

const Movies = ({movies, movieDetails}) => {

  const moviePosters = movies.map(movie => {
    return (
        <Card
        id = {movie.id}
        title={movie.title}
        image= {movie.poster_path}
        key={movie.id}
        movieDetails={movieDetails}
        />
    )
  })

  return (
      <section className="movies-container">
          {moviePosters}
      </section>
  )
}

export default Movies;
