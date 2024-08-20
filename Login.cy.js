describe ('Login Functionality', () => {

it('Loogin Registered user', () => {

cy.visit('https://parabank.parasoft.com/parabank/index.htm')

cy.get("input[name='username']").type('rajumadmonkey')

cy.get("input[name='password']").type('A@12345b')

cy.get("input[value='Log In']").click()
    
})

})