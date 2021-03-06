describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', 
    {fixture: 'sample-movies.json'})
    cy.visit('http://localhost:3000/')
  });

  it('should be able to visit the site and see a title and form displayed', () => {
    cy.contains('Rancid Tomatillos')
      .get('form')
      .get('input[type=text]')
    });

  it('should be able to select and type in a movie into the search bar', () => {
    cy.get('input[type="text"]')
      .type('Mulan')
      .should('have.value', 'Mulan')
  });

  it('should show movies when the page loads', () => {
    cy.get('.movie-poster')
      .should('have.length', 3)
  });

  it('should start to filter movies when a movie is typed into the input bar', () => {
    cy.get('input[type="text"]')
      .type('mon')
      .get('.movie-poster')
      .should('have.length', 1)
  });

  it('should display an error message if the incorrect URL is used', () => {
    cy.visit('http://localhost:3000/2')
      .get('.error-message')
  });

  it('should display an error message if there is a server error', () => {
    cy.visit('http://localhost:3000/1')
      .get('.error-message')
  });
})

