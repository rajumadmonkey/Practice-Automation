const { timeout } = require("async")


describe('User Registration', () => {
    it('Registration', () => {
  
     cy.visit("https://parabank.parasoft.com/parabank/index.htm")
  
     cy.get('#loginPanel > :nth-child(3) > a').click()
  
     cy.get(".input[id='customer.firstName']").type('Md Raju')
  
     cy.get(".input[id='customer.lastName']").type('Ahmed')
  
     cy.get(".input[id='customer.address.street']").type('Parojat R/A, Rajshahi')
  
     cy.get(".input[id='customer.address.city']").type('Rajshahi')
  
     cy.get(".input[id='customer.address.state']").type('Rajshahi')
  
     cy.get(".input[id='customer.address.zipCode']").type('6207')
  
     cy.get(".input[id='customer.phoneNumber']").type('+8801728717236')
  
     cy.get(".input[id='customer.ssn']").type('12345')
  
     cy.get(".input[id='customer.username']").type('rajuahmed')
  
     cy.get(".input[id='customer.password']").type('A@12345b')
  
     cy.get("#repeatedPassword").type('A@12345b')
  
     cy.get('[colspan="2"] > .button').click(), {timeout: 1000}

     cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
  
  
  
  
  
  
    
    })
  
  })