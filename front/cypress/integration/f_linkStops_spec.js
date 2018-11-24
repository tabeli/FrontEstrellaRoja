describe('CityTouristER E2E Testing', function(){
    it('Link Stops', function(){
        cy.visit('http://localhost:3000/paradas/vinculo')
        cy.visit('http://localhost:3000/paradas/agregarvinculo')
        cy.get('#stop').select('31')
        cy.get('#tour').select('24')
        cy.contains('Crea Vínculo').click()
        cy.visit('http://localhost:3000/paradas/vinculo')
        cy.visit('http://localhost:3000/paradas/agregarvinculo')
        cy.get('#stop').select('33')
        cy.get('#tour').select('24')
        cy.contains('Crea Vínculo').click()
    })
})