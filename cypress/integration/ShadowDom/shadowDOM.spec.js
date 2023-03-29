// http://127.0.0.1:5500/cypress/shadowDOM.html

///<reference types="cypress"/>

describe("Validate shadowDOM element", () => {
  it("validate normal input textBox", () => {
    cy.visit("http://127.0.0.1:5500/cypress/shadowDOM.html");
    cy.get("#channelname").type("Atish").should("have.value", "Atish");
  });
  it("validate the shdow dom element", () => {
    cy.contains("Add Shadow DOM").click();
    cy.get("#shadowHost")
      .shadow()
      .find("h2")
      .should("have.text", "I belong to Shadow DOM");
  });
  it("validate the input textBox in shdow", () => {
    cy.visit("http://127.0.0.1:5500/cypress/shadowDOM.html");
    cy.contains("Add Shadow DOM").click();
    cy.get("#shadowHost")
      .shadow()
      .find("#name")
      .type("Atish")
      .should("have.value", "Atish");
  });
  it("validate the shadow dom", () => {
    cy.visit("http://127.0.0.1:5500/cypress/shadowDOM.html");
    cy.contains("Add Shadow DOM").click();
    cy.get("#shadowHost").then((el) => {
      let [dom] = el.get();
      expect(dom.shadowRoot.querySelector("h2").textContent).to.eq(
        "I belong to Shadow DOM"
      );
    });
  });
  it("validate the shadow dom element", function () {
    cy.visit("http://127.0.0.1:5500/cypress/shadowDOM.html");
    cy.contains("Add Shadow DOM").click();
    cy.get("#shadowHost")
      .shadow()
      .find("h2")
      .should("have.text", "I belong to Shadow DOM");
  });
  it("validate the shadow dom element", function () {
    cy.visit("http://127.0.0.1:5500/cypress/shadowDOM.html");
    cy.contains("Add Shadow DOM").click();
    cy.get("h2", { includeShadowDom: true })
      .first()
      .should("have.text", "I belong to Shadow DOM");
  });
});
