///<reference types="cypress"/>
describe('verify the login functionality',function(){
    it('verify the login functionality',function(){
        cy.login('Admin','admin123')
        cy.get('h1').should('be.visible').should('have.text','Dashboard')
    })
    it('verify the login functionality',function(){
        cy.login('Admin','admin12')
        cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')
    })
})
