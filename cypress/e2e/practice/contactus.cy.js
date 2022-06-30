///<reference types="cypress" />
describe("verify the contact us form along with navigation", function () {
  it("verify the contact us form", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get(".section_header").should("have.text", "CONTACT US");
    cy.get(".section_header").invoke("text").then(function (str) {
        expect(str).to.eql("CONTACT US");
      });
    cy.get('input[name="first_name"]').type("Atish");
    cy.get('input[name="last_name"]').type("Chikhale");
    cy.get('input[name="email"]').type("atishchikhale123@gmail.com");
    cy.get('textarea[name="message"]').type("I am learning js");
    cy.get('input[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("verify the contact us form reset functionality", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get(".section_header").should("have.text", "CONTACT US");
    cy.get(".section_header").invoke("text").then(function (str) {
        expect(str).to.eql("CONTACT US");
      });
    cy.get('input[name="first_name"]').type("Atish");
    cy.get('input[name="last_name"]').type("Chikhale");
    cy.get('input[name="email"]').type("atishchikhale123@gmail.com");
    cy.get('textarea[name="message"]').type("I am learning js");
    cy.get('input[value="RESET"]').click();
    cy.get('input[name="first_name"]').should("have.text", "");
    cy.get('input[name="last_name"]').should("have.text", "");
    cy.get('input[name="email"]').should("have.text", "");
    cy.get('textarea[name="message"]').should("have.text", "");
  });

  it("verify the contact us form", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get(".section_header").should("have.text", "CONTACT US");
    cy.get(".section_header")
      .invoke("text")
      .then(function (str) {
        expect(str).to.eql("CONTACT US");
      });
    cy.get('input[name="first_name"]').type("Atish");
    cy.get('input[name="last_name"]').type("Chikhale");
    cy.get('input[name="email"]').type("atishchikhale123gmail.com");
    cy.get('textarea[name="message"]').type("I am learning js");
    cy.get('input[value="SUBMIT"]').click();
    cy.get("html").should("contain", "Invalid");
  });

  it.only("verify the contact us form", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get(".section_header").should("have.text", "CONTACT US");
    cy.get(".section_header")
      .invoke("text")
      .then(function (str) {
        expect(str).to.eql("CONTACT US");
      });
    cy.get('input[name="first_name"]').type("Atish");
    cy.get('input[name="last_name"]').type("Chikhale");
    cy.get('input[name="email"]').type("atishchikhale123@gmail.com");
    cy.get('input[value="SUBMIT"]').click();
    cy.get("html").should("contain", "all fields");
  })
}) 