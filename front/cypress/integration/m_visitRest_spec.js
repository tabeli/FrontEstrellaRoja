describe('CityTouristER E2E Testing', function(){
    it('Create Narrative', function(){
        cy.visit('http://localhost:3000/compra')
        cy.visit('http://localhost:3000/boletos')
        cy.visit('http://localhost:3000/boletos/tipoboleto')
        cy.visit('http://localhost:3000/boletos/tipoboletoeditar')
        cy.visit('http://localhost:3000/boletos')
        cy.visit('http://localhost:3000/boletos/agregar')
        cy.visit('http://localhost:3000/mapa')
    })
})
