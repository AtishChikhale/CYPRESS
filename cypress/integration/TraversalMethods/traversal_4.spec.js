///<reference types ="cypress"/>

describe("TRAVERSAL METHODS", () => {
  it("find", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._2Brcj4")
      .first()
      .scrollIntoView()
      .find("a")
      .should("have.length", 7);
  });
  it("nextAll", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._2Brcj4").first().nextAll().should("have.length", 5);
    cy.get("body").children().nextAll().should("have.length", 13);
  });
  it("prevAll", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._2Brcj4")
      .first()
      .scrollIntoView()
      .children()
      .last()
      .prevAll()
      .should("have.length", 7);
  });
  it.only("nextUntill", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._2Brcj4")
      .first()
      .scrollIntoView()
      .children()
      .first()
      .nextUntil('[href="/s/press?otracker=undefined_footer_navlinks"]')
      .should('have.length',4)
  });
});
