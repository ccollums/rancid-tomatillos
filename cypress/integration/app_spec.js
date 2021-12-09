describe('Rancid Tomatillos', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })

    it('should be able to visit the site and see a title and form displayed', () => {
        cy.contains('Rancid Tomatillos')
        .get('form')
        .get('input[type=text]')
      });

      it.skip('should display the application logo on page load', () => {

      })

      it('should be able to select and type in a movie into the search bar', () => {
        cy.get('input[type="text"]')
          .type('Mulan')
          .should('have.value', 'Mulan')
      })

      it.skip('should show movies when the page loads', () => {
         cy.fixture('sample-movies.json').then()
      })

      it.skip('should start to filter movies when a movie is typed into the input bar', () => {
        
    })

    it.skip('should display an error message if the incorrect URL is used', () => {

    })

    it.skip('should display an error message if there is a server error', () => {

    })
})