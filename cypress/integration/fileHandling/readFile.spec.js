///<reference types="cypress"/>

describe('Verify the "Read file" and "write file" in cypress', () => {
  it("write File in cypress", () => {
    cy.writeFile("swap1.json", { firstName: "Atish", lastName: "Chikhale" });
  });

  it("validate the content of json file using readFile", () => {
    cy.readFile("swap1.json").its("firstName").should("eq", "Atish");
    cy.readFile("swap1.json").its("lastName").should("eq", "Chikhale");
  });
});
