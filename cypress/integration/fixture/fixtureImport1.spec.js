///<reference types="cypress"/>

import getUserData from "../../fixtures/user1.json";

describe("fixture", () => {
  it("fixture using js import statement", () => {
    cy.log(getUserData);
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(getUserData.firstName);
    cy.get('[name="last_name"]').type(getUserData.lastName);
    cy.get('[name="email"]').type(getUserData.email);
    cy.get('[name="message"]').type(getUserData.comment);
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", getUserData.msg);
  });
});
