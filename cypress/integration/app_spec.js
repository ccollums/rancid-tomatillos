

describe('Rancid Tomatillos', () => {
    beforeEach(() => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {  
        
          "movies": [
        {
          "id": 694919,
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "title": "Money Plane",
          "average_rating": 6.625,
          "release_date": "2020-09-29"
          },
          {
          "id": 337401,
          "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
          "title": "Mulan",
          "average_rating": 5.2727272727272725,
          "release_date": "2020-09-04"
          },
          {
          "id": 718444,
          "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
          "title": "Rogue",
          "average_rating": 6.166666666666667,
          "release_date": "2020-08-20"
          }
        ] 
      })
      cy.visit('http://localhost:3000/');
    })

    it('should be able to visit the site and see a title and form displayed', () => {
  
      cy.contains('Rancid Tomatillos')
        .get('form')
        .get('input[type=text]')
      });


      it('should be able to select and type in a movie into the search bar', () => {
        cy.get('input[type="text"]')
          .type('Mulan')
          .should('have.value', 'Mulan')
      })

      // it.only('should be be able to clear the search bar and see the main page again', () => {
      //   cy.get('input[type="text]')
      //     .type('')
          
      // })

      it('should show movies when the page loads', () => {
          cy.get('.movie-poster')
             .should('have.length', 3)
      })

      it('should start to filter movies when a movie is typed into the input bar', () => {
        cy.get('input[type="text"]')
          .type('mon')
          .get('.movie-poster')
          .should('have.length', 1)
    })

    it.only('should display an error message if the incorrect URL is used', () => {
      cy.visit('http://localhost:3000/2')
        .get('.error-message')
        .should('have.value', 'Oops, something went wrong. Please refresh your page!')
    })

    it.skip('should display an error message if there is a server error', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movie', { 
          statusCode: 404,
          body: 'Forced 404'
        })
        .get('.error-message')
        .should('have.value', 'Oops, something went wrong. Please refresh your page!')
    })
})

