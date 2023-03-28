describe("check UI Elements", () => {
  it("checking radio buttons", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //visibility of radio buttons
    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    //selecting radio buttons
    cy.get("#male").check().should("be.checked");
    cy.get("#female").should("not.be.checked");

    cy.get("#female").check().should("be.checked");
    cy.get("#male").should("not.be.checked");
  });

  it("chekboxes", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");
  });
});
