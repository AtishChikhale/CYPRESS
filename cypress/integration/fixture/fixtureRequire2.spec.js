///<reference types="cypress"/>

const userData = require('../../fixtures/user2.json');

describe("fixture", () => {
  it("fixture using js require statement", () => {
    cy.log(userData);
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(userData.firstName);
    cy.get('[name="last_name"]').type(userData.lastName);
    cy.get('[name="email"]').type(userData.email);
    cy.get('[name="message"]').type(userData.comment);
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", userData.msg);
  });
});
