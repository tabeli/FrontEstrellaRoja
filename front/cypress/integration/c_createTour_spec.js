describe('CityTouristER E2E Testing',function(){
    it('Create Tour',function(){
        cy.visit('http://localhost:3000/rutas')
        cy.contains('Agregar').click()
        cy.get('#name')
          .type('Africam Safari')
          .should('have.value', 'Africam Safari')
        cy.get('#image_path')
          .type('https://storage.googleapis.com/principal-arena-219118/africam.jpg')
          .should('have.value', 'https://storage.googleapis.com/principal-arena-219118/africam.jpg')
        cy.get('#desc')
          .type('Visita y recorrido al zoológico y reserva natural "Africam Safari"')
          .should('have.value', 'Visita y recorrido al zoológico y reserva natural "Africam Safari"')
        cy.contains('Crea Tour').click()
    })
})