describe('CityTouristER E2E Testing', function(){
    it('Create Bus', function(){
        cy.visit('http://localhost:3000/camiones')
        cy.visit('http://localhost:3000/camiones/Agregar')
        cy.get('#tour_id').select('24')
        cy.get('#mural').select('17')
        cy.get('#capacity')
            .type('40')
            .should('have.value', '40')
        cy.get('#status').select('En servicio')
        cy.contains('Crea Camión').click()  
    })
})
