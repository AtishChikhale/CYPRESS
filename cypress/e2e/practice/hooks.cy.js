/// <reference types="cypress"/>

describe("verify the function of hooks",function(){
    before(function(){
        cy.log("i am befor block")
    })
    beforeEach(function(){
        cy.log('i am before each block')
    })
    it('it is first test case',function(){
        cy.log("it first test")
    })
    it("it is second test case",function(){
        cy.log("it is second test")
    })
    afterEach(function(){
        cy.log("i am after each block")
    })
    after(function(){
        cy.log("i am after block")
    })
})