context('Actions - 2', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})

context('Actions - 2 - Bis', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
  it('.type() - type into a DOM element - bis repetita', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
  it('.type() - type into a DOM element - failed', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
