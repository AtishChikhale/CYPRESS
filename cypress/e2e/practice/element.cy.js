///<reference types="cypress"/>
describe("Elements",()=>{
    before(()=>{
        cy.visit('https://demoqa.com/')
    })
    it("",()=>{
        cy.get('#app').find('h5').first().should('have.text','Elements').click()
        cy.get('#item-0').should('have.text','Text Box').click()
        cy.get('#userName').type("Atish Chikhale")
        cy.get('#userEmail').type("sample@gmail.com")
    })
})