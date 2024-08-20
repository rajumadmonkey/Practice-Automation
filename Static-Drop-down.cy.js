describe ('Drop Down', () => {

    it('Drop down', () => {

        cy.viewport(1450, 1050)
    
    cy.visit('https://www.qaengineering.com/')
    
    cy.get('span.sectionheader').should('contain', 'OUR WORK')
    .trigger('mousehover')
    .should('be.visible').click()

    cy.get('a[href="https://www.qaengineering.com/our-work/gallery"] span')
  .should('contain', 'PHOTO GALLERY').click()

        
    })
    
    })