///<reference types="cypress"/>

describe('Login',function(){
    it('Valid Login',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
    })
    it('Invalid Login',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text','Invalid credentials')
    })
    it('Login with Empty username',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtPassword').type('admin')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text','Username cannot be empty')
    })
    it('Login with Empty password',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.text','Password cannot be empty')
    })
})



