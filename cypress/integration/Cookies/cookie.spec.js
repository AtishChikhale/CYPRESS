///<reference types="cypress"/>

describe("handling cookies", () => {
  beforeEach(() => {
    cy.visit("https://kitchen.applitools.com/ingredients/cookie");
  });
  it("should get the value of cookie", () => {
    cy.getCookie("protein").should("have.property", "value", "chicken");
    cy.getCookie("vegetable").should("have.property", "value", "broccoli");
  });
  it("should update cookie", () => {
    cy.clearCookie("protein").then(() => {
      cy.setCookie("protein", "Pork").then(() => {
        cy.getCookie("protein").should("have.property", "value", "Pork");
      });
    });
  });
  it("should delete the value of cookie", () => {
    cy.clearCookie("protein").then(() => {
      cy.getCookie("protein").should("be.null");
    });
  });
  it("should adda new cookie", () => {
    cy.setCookie("fruit", "papaya").then(() => {
      cy.getCookie("fruit").should("have.property", "value", "papaya");
    });
  });
});
