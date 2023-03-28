///<reference types ="cypress"/>
//first(), last(), eq()
describe("traversal methods", () => {
  it("first", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="product"]')
      .first()
      .find("h4")
      .should("have.attr", "class", "product-name");
  });
  it("eq", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="product"]')
      .eq(3)
      .find("h4")
      .should("have.text", "Beetroot - 1 Kg");
  });
  it("last", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="product"]').last().find("h4").should("be.visible");
  });
  it("closest", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="product"]')
      .closest(".container")
      .should("have.class", "container");
  });
  // children(), find(), filter()

  it("children", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".container").children().should("have.length", 8);
  });

  it("find", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".container")
      .find("[class='search']")
      .should("have.attr", "class", "search");
  });

  it("filter", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".container")
      .children()
      .filter('[class="brand greenLogo"]')
      .should("have.attr", "class", "brand greenLogo");
  });
  // parent, closest, next, prev

  it("parent", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="product"]')
      .parent('[class="products"]')
      .should("have.attr", "class", "products");
  });

  it("closest", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".products-wrapper")
      .children()
      .closest(".products")
      .should("have.attr", "class", "products loading");
  });
  it("next", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".products-wrapper").next("footer").should('have.attr','footer')
  });
  it("prev", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="cart"]').prev().should("have.attr", "class", "search");
  });
});
