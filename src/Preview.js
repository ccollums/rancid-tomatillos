import './Preview.css';

const Preview = ({id, title, backdropPath, releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline}) => {
  console.log(title)

  return (
    <section className='details'>
      <p>{title}</p>
    </section>
  )
}


export default Preview;
