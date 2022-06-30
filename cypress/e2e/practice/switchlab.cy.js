///<reference types="cypress"/>
describe("varius ways to switch tab in cypress", function () {
  it("first way handling the tab switching ", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("contain", "Contact-Us");
  });
  it("Second way to handling to the tab switching", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target", "_self").click();
    cy.url().should("contain", "Contact-Us");
  });
  it("third way to handling to the tab switching", function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke('attr','href').then((res)=>{
        cy.visit(`https://webdriveruniversity.com/${res}`)
    });
        cy.url().should("contain", "Contact-Us");
  });
});
