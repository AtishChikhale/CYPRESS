/// <reference types="cypress"/>

describe("Traversal Method", () => {
  it("parent", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone{enter}");
    cy.get('a[href="/travel/flights?otracker=nmenu_Flights"]')
      .parent()
      .should("have.class", "_1kidPb");
  });
  it("closest", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone{enter}");
    cy.get('a[href="/travel/flights?otracker=nmenu_Flights"]')
      .closest("._331-kn")
      .should("have.class", "_331-kn");
  });
  it("next", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone{enter}");
    cy.get('a[href="/travel/flights?otracker=nmenu_Flights"]')
      .next('a[href="/offers-store?otracker=nmenu_offer-zone"]')
      .should("have.text", "Offer Zone");
  });
  it("prev", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._3704LK").type("i phone{enter}");
    cy.get('a[href="/travel/flights?otracker=nmenu_Flights"]')
      .prev()
      .should("have.text", "Sports, Books & More");
  });
});
