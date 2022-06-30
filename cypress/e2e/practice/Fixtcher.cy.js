///<reference types="cypress"/>

describe('verify the contact us form',function(){
    let info ={
        FirstName:"Atish",
        LastName:"Chikhale",
        Email:"atishchikhale123@gmail.com",
        message:"Hi i am learning cypress automation"
    }
    it('First testcase data set',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type("Atish");
        cy.get('input[name="last_name"]').type("Chikhale");
        cy.get('input[name="email"]').type("atishchikhale123@gmail.com");
        cy.get('textarea[name="message"]').type("Hi i am learning cypress automation");
        cy.get('input[value="SUBMIT"]').click();
    })
    it('Second test case data set',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.FirstName);
        cy.get('input[name="last_name"]').type(info.LastName);
        cy.get('input[name="email"]').type(info.Email);
        cy.get('textarea[name="message"]').type(info.message);
        cy.get('input[value="SUBMIT"]').click();
    })
    it('thid test case data set',function(){
        cy.fixture('contactUs').then(function(info){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.FirstName);
        cy.get('input[name="last_name"]').type(info.LastName);
        cy.get('input[name="email"]').type(info.Email);
        cy.get('textarea[name="message"]').type(info.message);
        cy.get('input[value="SUBMIT"]').click();
        })
    })
})