//checkbox

//1 by using click() method
// 2 by using check) method
// 3 by using check method by passing value in argument as like => check('value') method
// 4 by using check method by passing array in check method argument => ['arg1','arg2','arg3']

//Note: we can select multiple checkbox by passing aray in check method

///<reference types="cypress"/>

describe("verify the checkbox", () => {
  it("verify checkbox", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="checkbox"]').first().click();
    cy.get('input[type="checkbox"]').first().should("be.checked");
    cy.get('input[type="checkbox"]').first().click();
    cy.get('input[type="checkbox"]').first().should("not.be.checked");

    //=================================OR==============================================

    cy.get("#checkboxes").children().first().click();
    cy.get('[value="option-1"]').should("be.checked");
    cy.get("#checkboxes").children().first().click();
    cy.get('[value="option-1"]').should("not.be.checked");
  });

  it("verify the checkbox using chek() method", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').first().should("be.checked");
    cy.get('input[type="checkbox"]').first().uncheck();
    cy.get('input[type="checkbox"]').first().should("not.be.checked");
  });

  it("verify the functionality of checkbox by using check method by passing value", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="checkbox"]').check("option-1");
    cy.get('[value="option-1"').should("be.checked");
    cy.get('input[type="checkbox"]').first().uncheck("option-1");
    cy.get('[value="option-1"]').should("not.be.checked");
  });

  it("verify the functionality of checkbox by using check method by passing value", () => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('[type="checkbox"]').check([
      "option-1",
      "option-2",
      "option-3",
      "option-4",
    ]);

    cy.get('[type="checkbox"]').should("be.checked");
    cy.get('[type="checkbox"]').uncheck([
      "option-1",
      "option-2",
      "option-3",
      "option-4",
    ]);
    cy.get('[type="checkbox"]').should("not.be.checked");
  });
});
