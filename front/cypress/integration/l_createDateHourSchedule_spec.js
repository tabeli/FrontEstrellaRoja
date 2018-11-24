describe('CityTouristER E2E Testing', function(){
    it('Create Full Scheudle', function(){
        
        cy.visit('http://localhost:3000/horario')
        cy.visit('http://localhost:3000/horario/agregar')
        cy.get('#start_time')
            .type('10:00:00')
            .should('have.value','10:00:00')
        cy.get('#end_time')
            .type('18:00:00')
            .should('have.value','18:00:00')
        cy.get('#frequency')
            .type('00:30:00')
            .should('have.value', '00:30:00')
        cy.contains('Crea Intervalo de Horarios').click()  

        cy.visit('http://localhost:3000/fecha')
        cy.visit('http://localhost:3000/fecha/agregar')
        cy.get('#start')
            .type('2019-01-01')
            .should('have.value','2019-01-01')
        cy.get('#end')
            .type('2019-02-01')
            .should('have.value','2019-02-01')
        cy.get('#status').select('En servicio')
        cy.contains('Crea Intervalo de Fechas').click()

        
        cy.visit('http://localhost:3000/itinerario')
        cy.visit('http://localhost:3000/itinerario/agregar')
        cy.get('#hour_interval').select('17')
        cy.get('#date_interval').select('22')
        cy.contains('Crea Itinerario').click()
        
        cy.visit('http://localhost:3000/itinerario')
        cy.visit('http://localhost:3000/itinerario/vinculo')
        cy.visit('http://localhost:3000/itinerario/agregarvinculo')
        cy.get('#schedule').select('23')
        cy.get('#tour_id').select('24')
        cy.contains('Crea Vínculo').click()

    })
})
