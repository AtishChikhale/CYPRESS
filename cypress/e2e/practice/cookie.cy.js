///<reference types="cypress"/>

describe('verify the url',function(){
    it('handling cookie in cypress',function(){
        cy.visit('http://localhost:5500/pro/hello.html')
        cy.setCookie('Name','Atish')
        cy.getCookie('Name').then(function(obj){
            cy.log(obj.value)
        })
        cy.setCookie('Name','Atish Chikale')
        cy.setCookie('Name1','Atish Chikale1')
        cy.clearCookie('Name')
        cy.getCookie('Name1').then(function(obj){
            cy.log(obj.value)
        })
        cy.clearCookies()
        cy.getCookies().should('be.empty')
        cy.window().then(function(win){
            win.localStorage.setItem('surname','chikhale')
        })
        cy.clearLocalStorage()
    })
})