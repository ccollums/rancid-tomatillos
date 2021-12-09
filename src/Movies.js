import "./Movies.css";
import Card from './Card';
import Preview from './Preview.js'
import { Link } from 'react-router-dom';
import tomato2 from './images/tomatos2.svg';
import magnifyGlass from './images/grey-magnify-glass.svg'
import Form from './Form.js'

const Movies = ({movies, error, searchMovies, componentDidMount}) => {

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
    <section>
      <section className='header'>
          <section className='logo-title'>
            <img className='logo' src={tomato2} />
            <h1 className='title'>Rancid Tomatillos</h1>
          </section>
          <section className='form'>
          <img className='magnify-glass' src={magnifyGlass}/>
          <Form searchMovies={searchMovies} componentDidMount={componentDidMount}/>
          </section>
      </section>
      <section className="movies-container">
          {moviePosters}
      </section>
      </section>

  )
}

export default Movies;
