///<reference types="cypress"/>

describe("traversal methods", () => {
  it("prevUntill", () => {
    cy.visit("https://www.flipkart.com");
    cy.get('[class="_2Brcj4"]')
      .first()
      .children()
      .last()
      .prevUntil(
        '[href="http://stories.flipkart.com/?otracker=undefined_footer_navlinks"]'
      )
      .should("have.length", 2);
  });
  it("siblings", () => {
    cy.visit("https://www.flipkart.com");
    cy.get(
      '[href="http://stories.flipkart.com/?otracker=undefined_footer_navlinks"]'
    )
      .siblings()
      .should("have.length", 7);
  });
  it("parents", () => {
    cy.visit("https://www.flipkart.com");
    cy.get("._2Brcj4").first().parents().should("have.length", 8);
  });
  it("parentsUntill", () => {
    cy.visit("https://www.flipkart.com");
    cy.get("._2Brcj4")
      .first()
      .parentsUntil("#container")
      .should("have.length", 5);
  });
  it.only("not", () => {
    cy.visit("https://www.flipkart.com");
    cy.get("._2Brcj4").first().parents().not("#container").should('have.length',7);
    cy.get('._2Brcj4').first().children().not('div').should('have.length',7)
  });
});
