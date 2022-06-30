///<reference types="cypress"/>

describe("validate the login function", function () {
  it("login with valid credintial", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").click();
    cy.get("h1").should("be.visible");
  });
  it("login with invalid credintial", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin121");
    cy.get("#btnLogin").click();
    cy.get("#spanMessage").should('be.visible',).should('have.text','Invalid credentials')
  });
});
