const getMovies = () => {
	return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  	.then(response => response.json())
}

const getSingleMovie = (id) => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
		.then(response => response.json())
}

const getVideos = (video) => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${video}`)
}

export {
	getMovies,
	getSingleMovie, 
	getVideos
}