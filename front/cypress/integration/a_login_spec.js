describe('CityTouristER E2E Testing', function(){
  it('Create Tour', function(){
    cy.visit('http://localhost:3000')
    cy.get('#email')
      .type('admin@admin.com')
      .should('have.value', 'admin@admin.com')
    cy.get('#contr')
      .type('admin')
    cy.contains('Ingresar').click()
    cy.url().should('include','/mapa')
  })
})

