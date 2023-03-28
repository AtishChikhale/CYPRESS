describe("Verify Login functionality", () => {
  it("Test case 1: Positive LogIn test", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.url().should(
      "contain",
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    cy.contains("Logged In Successfully").should("be.visible");
    cy.contains("Log out").should("have.text", "Log out");
    cy.contains("Log out").click();
  });
  it("Test case 2: Negative username test", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student123");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains('Your username is invalid!').should('be.visible')
  });
  it("Test case 3: Negative password test", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password0123");
    cy.get("#submit").click();
    cy.contains('Your username is invalid!').should('be.visible')
  });
});
