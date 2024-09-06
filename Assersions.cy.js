describe('Cypress Assertion Suite',()=>{

    it('Cypress Assertion Test', ()=>{

        cy.visit('https://www.google.com/search?sca_esv=b3b81d1d30ec7baa&sca_upv=1&q=QAMan+llc&spell=1&sa=X&ved=2ahUKEwjL-uumua2IAxWrUGwGHZC6A0EQBSgAegQICBAB&biw=1920&bih=953&dpr=1')

        cy.get('#APjFqb').then((element)=>{
            expect(element.text()).to.equal("QAMan llc");
        })

        cy.get('#APjFqb').should("have.text","QAMan llc")

        cy.get('#APjFqb').should("contain","QAMan llc")

        cy.get('#APjFqb').should("be.visible")

        cy.get('#APjFqb').should("have.html","QAMan llc")
   
        cy.get('#APjFqb').should("have.html","QAMan llc")
        .and("have.attr","value")

        cy.get('#APjFqb').should("have.html","QAMan llc")
        .and("have.attr","value").and("include","QAMan llc")

        cy.get('#APjFqb').then((element)=>{
            expect(element.text()).to.have.length(9);
        })
    })

})