///<reference types="cypress"/>

describe('verify the contact us form',function(){
    let data;
    before(function(){
        cy.fixture('ContactUs1').then((dataset)=>{
            data = dataset
        })
    })
    it('first test case',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[0].FirstName);
        cy.get('input[name="last_name"]').type(data[0].LastName);
        cy.get('input[name="email"]').type(data[0].Email);
        cy.get('textarea[name="message"]').type(data[0].message);
        cy.get('input[value="SUBMIT"]').click();
    })
    it('second test case',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[1].FirstName);
        cy.get('input[name="last_name"]').type(data[1].LastName);
        cy.get('input[name="email"]').type(data[1].Email);
        cy.get('textarea[name="message"]').type(data[1].message);
        cy.get('input[value="SUBMIT"]').click();
    })
    it.only('third test case',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.xpath('//*[@id="contact_form"]/input[1]').type(data[1].FirstName);//using xpath
        cy.get('input[name="last_name"]').type(data[1].LastName);
        cy.get('input[name="email"]').type(data[1].Email);
        cy.get('textarea[name="message"]').type(data[1].message);
        cy.get('input[value="SUBMIT"]').click()
    })
})