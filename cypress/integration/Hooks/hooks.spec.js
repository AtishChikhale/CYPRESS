///<reference types="cypress"/>

describe("Hooks", () => {
  before("It is before block", () => {
    cy.log("before block");
  });
  beforeEach("It is BeforeEach block", () => {
    cy.log("BeforeEach block");
  });
  after("it is after block", () => {
    cy.log("after block");
  });
  afterEach("It is afterEach block", () => {
    cy.log("after eachBlock");
  });
  it("It is first test case", () => {
    cy.log("first test case");
  });
  it("It is second test case", () => {
    cy.log("second test case");
  });
  it("It is tird test case", () => {
    cy.log("third test case");
  });
});
