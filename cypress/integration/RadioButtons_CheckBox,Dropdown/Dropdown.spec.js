// DropDown
// there are two ways
//1 having select tag

///<reference types="cypress"/>

describe("verify the dropdown functionality by using select tag", () => {
  beforeEach(() => {
    cy.visit(
      "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
  });
  it("verify the dropdown having select tag", () => {
    cy.get("#dropdowm-menu-1").select("c#").should("have.contain", "C#");
    cy.get("#dropdowm-menu-1").select("java").should("have.contain", "JAVA");
    cy.get("#dropdowm-menu-1")
      .select("python")
      .should("have.contain", "Python");
  });
});
