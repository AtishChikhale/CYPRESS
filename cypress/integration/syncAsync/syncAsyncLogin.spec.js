//1 in cypress command are executed "ASYNCHROUSLY"

//2 in cypress code execution done "SYNCHRONOUSLY" => problem is that when we include javascript code in
//cypress code synchronous execution flow gets break and js code executed first

//3 To avoid that we used .then and inside that we write js code so command after.
//then executed after cypress code

///<reference types="cypress"/>

describe("Validate the login functionality", () => {
  it("Validate with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[type="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get("h6").should("have.text", "Dashboard");
    console.log("Hello");
  });
  it("Invalidate with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("New");
    cy.get('[type="password"]').type("New123");
    cy.get('[type="submit"]').click();
    cy.get(".oxd-alert-content > .oxd-text")
      .should("be.visible")
      .then(() => {
        console.log("Hello");
      });
  });
});
