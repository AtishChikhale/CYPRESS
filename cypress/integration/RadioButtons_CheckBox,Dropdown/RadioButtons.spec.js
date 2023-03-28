//RadioButtons
//1. by using click() method
//2. by using check() method
//3. by using check by passing value in argument as like => ('value') method

//Note: In radio button there is no uncheck method as we select another radio button first selected radio button automatically get deselected

///<reference types="cypress"/>

describe("verify radio buttons", () => {
  beforeEach(() => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
  });
  it("verify radio button functionality by using click method", () => {
    cy.get('input[type="radio"]').first().click();
    cy.get('input[type="radio"]').first().should("be.checked");
    cy.get('input[type="radio"]').eq(1).click();
    cy.get('input[type="radio"]').first().should("not.be.checked");
  });

  it("verify radio button functionality by using check method common attribute,", () => {
    cy.get('input[type="radio"]').first().check();
    cy.get('input[type="radio"]').first().should("be.checked");
    cy.get('input[type="radio"]').eq(1).check();
    cy.get('input[type="radio"]').first().should("not.be.checked");
  });

  it("verify radio button functionality by using check method unique attribute", () => {
    cy.get('[value="green"]').check();
    cy.get('[value="green"]').should("be.checked");
    cy.get('[value="yellow"]').check();
    cy.get('[value="green"]').should("not.be.checked");
  });

  it("verify radio button functionality by using check method by passing value in check method argument", () => {
    cy.get('[type="radio"]').check("green");
    cy.get('[value="green"]').should("be.checked");
    cy.get('[type="radio"]').check("yellow");
    cy.get('[value="green"]').should("not.be.checked");
  });
});
