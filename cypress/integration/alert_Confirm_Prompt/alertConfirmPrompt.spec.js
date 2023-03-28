///<reference types="cypress"/>
describe("Alerts", () => {
  it("js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  it("js confirm alert - ok", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t1) => {
      expect(t1).to.contains("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });
  it("js confirm alert - cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t1) => {
      expect(t1).to.contains("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("js prompt alert - Ok", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: Welcome");
  });
  it("js prompt alert - Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: Welcome");
  });

  //   basic auhantication alert
  it("Authentication alert 1st Approch", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });
    cy.get("div[class='example'] p").should("have.contain", "Congratulation");
  });
  it("Authentication alert 2nd Approch", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example'] p").should("have.contain", "Congratulation");
  });
});
