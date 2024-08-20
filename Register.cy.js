
//import 'cypress-xpath';

describe('As a User, I want to Registration', () => {
    it('Registration', () => {
  
     cy.viewport(1450, 1050)
     cy.visit("https://staging.madmonkeytickets.com/")

     cy.get('a[href="#login"]')
      .should('be.visible').eq(0).click()
  
     //cy.xpath('//p[@class="go-place" and text()="GO PLACES"]')
      //.should('be.visible').eq(0).click()
     
      cy.get('span.country').invoke('text').then((text) => {
        expect(text.trim()).to.equal('Hoi')})
     
  
  
    
    })
  
  })