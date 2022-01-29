describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/337401');
  });

  it.skip('should be able to visit the details page of a movie and see the movies details', () => {
    cy.contains('Mulan')
    cy.contains('5/10')
    cy.contains('115 min')
    cy.contains('Action')
    cy.contains('Adventure')
    cy.contains('Fantasy')
    cy.contains('Drama')
    cy.contains('When the Emperor')
    cy.contains('Release Date: 09-04-2020')
    cy.contains('Budget: $200,000,000')
    cy.contains('Revenue: $57,000,000')
    cy.contains('Watch Trailer')
  });

  it.skip('should be able to click the play icon and the embedded youtube video will pop up on the page', () => {
    cy.get('.play-button').click()
    .get('.trailer-location')
    .get('iframe')
  });

  it.skip("should be able to go back to the main dashboard when the x icon is clicked", () => {
    cy.visit('http://localhost:3000/337401')
      .get('.x-icon').click()
      .get('.movie-poster')
      .should('have.length', 40)
  });

  it.skip('should show an error message if there is a server error', () => {
    cy.visit('http://localhost:3000/33740')
    .get('.error-message')
  });

  it.skip("should show an error if the user goes to the wrong URL", () => {
    cy.visit('http://localhost:3000/33740')
    .get('.error-message')
  });

  it('should be able to use the back arrow to go back to the main dashboard', () => {
    cy.visit('http://localhost:3000/') 
    cy.visit('http://localhost:3000/337401') 
    cy.go('back')
      .get('.movie-poster')
      .should('have.length', 40)
  });
})