import "./Movies.css";
import Card from './Card';

const Movies = ({movies}) => {

  const moviePosters = movies.map(movie => {
      return (
          <Card
          title={movie.title}
          image= {movie.poster_path}
          key={movie.id}
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
