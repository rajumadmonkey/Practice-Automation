describe('Scroll Up Down Suite', () => {

    it('Scroll Test', () => {
  
      cy.visit('https://www.google.com/search?sca_esv=b3b81d1d30ec7baa&sca_upv=1&q=QAMan+llc&spell=1&sa=X&ved=2ahUKEwjL-uumua2IAxWrUGwGHZC6A0EQBSgAegQICBAB&biw=1920&bih=953&dpr=1')

      cy.wait(5000);

      cy.contains('Nibras Al-Qamar LLC')
        .scrollIntoView().should('be.visible').click();
   
    })
  
  })