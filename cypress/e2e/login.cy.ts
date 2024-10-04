describe('User Authentication and Navigation to Home Page', () => {
  it('should successfully log in with valid credentials and navigate to the home page', () => {
    cy.visit('/login')

    cy.get('input[name="email"]').type(Cypress.env('email'))
    cy.get('input[name="password"]').type(Cypress.env('password'))

    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/login')

    cy.visit('/')

    cy.url().should('eq', Cypress.config('baseUrl') + '/')
  })
})
