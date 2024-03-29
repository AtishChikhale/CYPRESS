//INVOKE => invoke() => if we want to used javascript method in cypress the is invoke function or method
//IT => it => it is a property is we want to used javascript property in cypress we have it property

///<reference types="cypress"/>
describe("Invoke function", () => {
  it("invoke", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();

    cy.get(".section_header")
      .invoke("text")
      .should("have.contain", "CONTACT US");
    cy.get(".section_header")
      .invoke("attr", "name")
      .should("equal", "contactme");

    cy.url().should(
      "include",
      "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
  });
});

describe("it property", () => {
  it("invoke", () => {
    cy.visit("http://www.webdriveruniversity.com");
  });
});
