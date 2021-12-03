import "./Movies.css";
import Card from './Card';
import './Movies.js'

const Movies = ({movies}) => {

  const moviePosters = movies.map(movie => {
      return (
          <Card
          image = {movie.poster_path}
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