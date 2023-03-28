///<reference types="cypress"/>

describe("Fixture 1", () => {
  let gloableVar;
  before("access the fixture file from fixture", () => {
    cy.fixture("f1/testData.json").then((data) => {
      gloableVar = data;
    });
  });
  it("using gloable variable", () => {
    cy.log(gloableVar);
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(gloableVar.firstName);
    cy.get('[name="last_name"]').type(gloableVar.lastName);
    cy.get('[name="email"]').type(gloableVar.email);
    cy.get('[name="message"]').type(gloableVar.comment);
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", gloableVar.msg);
  });
});

describe("Fixture 2", () => {
  before("access the fixture file from fixture using alias", () => {
    cy.fixture("f1/testData").as("testData1");
  });
  it("using alias variable", () => {
    cy.get("@testData1").then((data) => {
      cy.log(data);
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.get('[name="first_name"]').type(data.firstName);
      cy.get('[name="last_name"]').type(data.lastName);
      cy.get('[name="email"]').type(data.email);
      cy.get('[name="message"]').type(data.comment);
      cy.get('[value="SUBMIT"]').click();
      cy.get("h1").should("have.text", data.msg);
    });
  });
});

describe("Fixture 3", () => {
  before("access the fixture file from fixture using this keyword", () => {
    cy.fixture("f1/testData").then(function (data1) {
      this.data1 = data1;
    });
  });
  it("using this keyword", function () {
    cy.log(this.data1);
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(this.data1.firstName);
    cy.get('[name="last_name"]').type(this.data1.lastName);
    cy.get('[name="email"]').type(this.data1.email);
    cy.get('[name="message"]').type(this.data1.comment);
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", this.data1.msg);
  });
});
