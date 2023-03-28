/// <reference types ="cypress"/>

describe("Traversal Methods", () => {
  before("Before", () => {
    cy.visit("https://www.flipkart.com/");
  });
  it("TR01- First", () => {
      cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone");
    cy.get(".L0Z3Pu").click();
    cy.get("._10Ermr", { timeout: 50000 }).should("be.visible");
    cy.get("._4rR01T")
      .first()
      .should("have.text", "APPLE iPhone 11 (White, 128 GB)");
  });

  it("TR02 - last", () => {
      cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone");
    cy.get(".L0Z3Pu").click();
    cy.get("._10Ermr", { timeout: 50000 }).should("be.visible");
    cy.get("._4rR01T")
      .last()
      .should("have.text", "APPLE iPhone 14 Plus (Blue, 256 GB)");
  });

  it("TR03 - eq", () => {
      cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone");
    cy.get(".L0Z3Pu").click();
    cy.get("._10Ermr", { timeout: 50000 }).should("be.visible");
    cy.get("._4rR01T")
      .eq(2)
      .should("have.text", "APPLE iPhone 13 (Starlight, 128 GB)");
  });
});
