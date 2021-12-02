import "./Movies.css";

const Movies = ({movies}) => {

  const moviePosters = movies.map(movie => {
      return (
          <Card
          image = {movie.poster_path}
          />
      )
  })

  return (
      <section className="movies-container">
          {moviePosters}
      </section>
  )
}

export default Ideas;