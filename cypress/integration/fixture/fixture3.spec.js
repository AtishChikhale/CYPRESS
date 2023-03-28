///<reference types="cypress"/>

describe("fixture", () => {
  it("using cy.fixture", () => {
    cy.fixture("user2").then((testData) => {
      cy.log(testData);
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.get('[name="first_name"]').type(testData.firstName);
      cy.get('[name="last_name"]').type(testData.lastName);
      cy.get('[name="email"]').type(testData.email);
      cy.get('[name="message"]').type(testData.comment);
      cy.get('[value="SUBMIT"]').click();
      cy.get("h1").should("have.text", testData.msg);
    });
  });
});
