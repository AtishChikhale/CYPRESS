///<reference types="cypress" />

// mocha //BDD

// describe() ==> what to test
//it() ==> how to test

//mocha
describe("Search Functionality", function () {
  it("ts01-verify Search functinality", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("I Phone 14");
    cy.get("#nav-search-submit-button").click();
    cy.get(".s-no-outline > .a-size-medium-plus").should("have.text", "RESULTS");
  });
});
