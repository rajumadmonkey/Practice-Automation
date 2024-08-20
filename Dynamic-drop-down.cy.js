describe ('Dynamic Drop Down', () => {

    it('Dynamic Drop Down', () => {
    
    cy.visit('https://www.google.com/travel/flights', {headers: {"Accept-Encoding": "gzip, deflate"}})
    
    cy.get('input[aria-label="Where to? "]')
     .should('be.visible').type('Bang')

     cy.get('div.zsRT0d').should('contain', 'Don Mueang International Airport').eq(6).click()
    })
    
    })