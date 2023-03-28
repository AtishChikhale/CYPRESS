///<reference types="cypress"/>

describe("Validate alert", () => {
  it("verify the js alert", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.on("window:alert", (str) => {
      expect(str).to.eqls("I am a JS Alert");
    });
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", () => {
      return true;
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("verify the js confirm alert for cancel", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.on("window:confirm", (str) => {
      expect(str).to.eql("I am a JS Confirm");
    });
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", () => {
      return false;
    });
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("verify the js confirm alert for ok", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.on("window:confirm", (str) => {
      expect(str).to.eql("I am a JS Confirm");
    });
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", () => {
      return true;
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("verify the js prompt alert", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("I am new to js");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("have.text", "You entered: I am new to js");
  });
});

describe("using window() confirm alert", () => {
  it("verify the js confirm alert for ok", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(true);
      cy.contains("Click for JS Confirm").click();
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("verify the js confirm alert for cancel", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(false);
      cy.contains("Click for JS Confirm").click();
    });
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("verify the prompt", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("I am new to js");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("have.text", "You entered: I am new to js");
  });
});
