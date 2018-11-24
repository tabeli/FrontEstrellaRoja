describe('CityTouristER E2E Testing', function(){
    it('Create Narrative', function(){
        cy.visit('http://localhost:3000/narrativa')
        cy.visit('http://localhost:3000/narrativa/agregar')
        cy.get('#audio_path')
            .type('https://storage.googleapis.com/principal-arena-219118/song.mp3')
            .should('have.value', 'https://storage.googleapis.com/principal-arena-219118/song.mp3')
        cy.get('#desc')
            .type('Narrativa del lugar X')
            .should('have.value', 'Narrativa del lugar X')
        cy.contains('Crea Narrativa').click()  
    })
})
