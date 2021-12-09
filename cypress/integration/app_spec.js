

describe('Rancid Tomatillos', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      
    })

    it('should be able to visit the site and see a title and form displayed', () => {
  
      cy.contains('Rancid Tomatillos')
        .get('form')
        .get('input[type=text]')
      });

      // it.skip('should display the application logo on page load', () => {
      // cy.get('.logo')
      //   .should()
      // })

      it('should be able to select and type in a movie into the search bar', () => {
        cy.get('input[type="text"]')
          .type('Mulan')
          .should('have.value', 'Mulan')
      })

      // it.only('should be be able to clear the search bar and see the main page again', () => {
      //   cy.get('input[type="text]')
      //     .type('')
          
      // })

      it.only('should show movies when the page loads', () => {
        cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
          cy.fixture('../fixtures/sample-movies.json')
      
      })

      it.skip('should start to filter movies when a movie is typed into the input bar', () => {
        
    })

    it.skip('should display an error message if the incorrect URL is used', () => {

    })

    it.skip('should display an error message if there is a server error', () => {

    })
})