///<reference types="cypress"/>
describe("Handel Tabs", () => {
  it("Approch 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent window
    cy.get(".example > a").invoke("removeAttr", "target").click(); //cliking on linnk
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    //operations
    cy.go("back"); // go back to parrent tab
  });

  it.only("Approch 2nd", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent window
    cy.get(".example > a").then((el) => {
      let url = el.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    //operations
    cy.go("back"); // go back to parrent tab
  });
});
