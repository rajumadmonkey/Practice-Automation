describe('Radio Button', () => {

    it ('Radio Button', () => {

    cy.viewport(1450, 1050)   
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")

    cy.get('#radio-choice-0a').check({ force: true })

    cy.get('input[name="radio-choice-v-2"][value="off"]').check({ force: true })

    cy.get('#radio-choice-v-6c').check({ force: true })



    })
})