///<reference types="cypress"/>

describe("hooks", () => {
  before("before", () => {
    cy.visit("https://www.amazon.in/");
  });
  it("first", () => {
    cy.get("#twotabsearchtextbox").type("I phone");
    cy.get("#nav-search-submit-button").click();
    cy.get(".a-size-medium")
      .find("span")
      .first()
      .should("have.text", "Explore More With Apple");
  });
  it("eq", () => {
    cy.get(".a-size-medium")
      .eq(2)
      .should("have.text", "iphone");
  });
});
