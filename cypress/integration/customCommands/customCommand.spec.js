///<reference types="cypress"/>

describe("CUSTOM COMMAND", () => {
  it("Login", () => {
    cy.login("student", "Password123");
    cy.get(".post-title").should("be.visible");
  });
});
