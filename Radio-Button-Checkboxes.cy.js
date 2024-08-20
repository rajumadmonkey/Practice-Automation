

describe('Radio buttons and checkboxes', () => {
    it('Radio buttons and checkboxes', () => {
  
     cy.visit("https://www.ironspider.ca/forms/checkradio.htm")

     cy.get('input[value="red"]').should('be.visible').check()

     cy.get('input[value="purple"]').should('be.visible').check()

     cy.get('input[value="orange"]').should('be.visible').check()
  
  
    
    })
  
  })