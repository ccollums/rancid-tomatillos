import "./Movies.css";
import Card from './Card';
import Preview from './Preview.js'

const Movies = ({movies, movieDetails}) => {

  const moviePosters = movies.sort((a,b) => {return a.title.localeCompare(b.title)}).map(movie => {
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
