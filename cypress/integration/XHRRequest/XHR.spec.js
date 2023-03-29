///<reference types="cypress"/>

describe("XHR", () => {
  it("Xhr", () => {
    cy.request("https://jsonplaceholder.cypress.io/comments").as("c");

    cy.get("@c").should((res) => {
      expect(res.body).to.have.length(500);
      expect(res).to.have.property("headers");
    });
  });
});
