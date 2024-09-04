describe ('Book a Hotel', () => {

    it('Book a Hotel', () => {
    
    cy.visit('https://staging.madmonkey', {headers: {"Accept-Encoding": "gzip, deflate"}})
    
    cy.get('.Hotel-button-class').click();

    cy.get('.Location-button-class').click();

    cy.get('input[aria-label="Where to? "]')
     .should('be.visible').type('Bang');

    cy.get('div.destination').should('contain', 'New York').eq(2).click();

    cy.get('back-button').click()

    cy.get(Check in-Checkout).click()

    cy.get(Start-date).select()

    cy.get(End-date).select()

    cy.get('Apply-button').click()

    cy.get('Guest').click()

    cy.get('+- button').dblclick()

    cy.get('- - button').dblclick()

    cy.get('Apply-button').click()

    cy.get('Search-button').click().should('displaying rooms')













     

     cy.get('div.zsRT0d').should('contain', 'Don Mueang International Airport').eq(6).click()
    })
    
    })