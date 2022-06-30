///<reference types="cypress"/>

const { first } = require("lodash");

describe("Login to ORANGE-HRM website", function () {
  before(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture("testdata").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  it("validate succesful Login", function () {
    cy.get("#txtUsername").type(this.testdata.username);
    cy.get("#txtPassword").type(this.testdata.password);
    cy.get("#btnLogin").click();
    cy.get("#welcome").contains(this.testdata.WelcomeText);
  });
  it("Validate all the Quick Launch Texts", function () {
    // cy.get(".quickLaunge").each((el, index) => {
    // cy.wrap(el).to.contain(this.testdata.quickLaunch[index]);
    // });
    let quickLaunch = [
      "Assign Leave",
      "Leave List",
      "Timesheet",
      "Apply Leave",
      "My Leave",
      "My Timesheet",
    ];
    cy.get(".quickLaunge").each(function (el, index) {
      cy.wrap(el)
        .contains(quickLaunch[index])
        .should("contain", quickLaunch[index]);
    });
  });
});
