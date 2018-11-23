describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
})

describe('Accessing CityTouristER', function() {
  it('Visits the Admin Panel', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('type')
  })
})