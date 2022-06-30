///<reference types="cypress" />
describe("verify the contact us form along with navigation", function () {
    it("verify the contact us form", function () {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#contact-us").invoke("removeAttr", "target").click();
      cy.get(".section_header").should("have.text", "CONTACT US");
      cy.get(".section_header").invoke("text").then(function (str) {
          expect(str).to.eql("CONTACT US");
        });
     cy.ValidateContactUs('atish','chikhale','atishchikhale123@gmail.com','i am lerner')
      cy.get('input[value="SUBMIT"]').click();
      cy.get("h1").should("have.text", "Thank You for your Message!");
    });
  
    it("verify the contact us form reset functionality", function () {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#contact-us").invoke("removeAttr", "target").click();
       cy.ValidateContactUs('atish','chikhale','atishchikhale123@gmail.com','i am lerner')
        cy.get('input[value="RESET"]').click();
        cy.ValidateContactUs(' ',' ',' ',' ')
    });
  
    it("verify the contact us form with invalid email", function () {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#contact-us").invoke("removeAttr", "target").click();
      cy.ValidateContactUs('atish','chikhale','atishchikhale123gmail.com','i am lerner')
      cy.get('input[value="SUBMIT"]').click();
      cy.get("html").should("contain", "Invalid");
    });
  
    it("verify the contact us form with all feilds are requrid", function () {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#contact-us").invoke("removeAttr", "target").click();
      cy.ValidateContactUs('atish','chikhale','atishchikhale123@gmail.com','{backspace}')
      cy.get('input[value="SUBMIT"]').click();
      cy.get("html").should("contain", "all fields");
    })
  })