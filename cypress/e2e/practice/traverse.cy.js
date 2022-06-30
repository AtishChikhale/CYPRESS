///<reference types="cypress" />

describe("tranverse method in cypress", function () {
  it("To get children of DOM elements, use the .children() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .should("have.length", 3);
  });

  it("To get the first DOM element within elements, use the .first() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .first()
      .should("have.text", "Home");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .first()
      .should("contain", "Home");
  });

  it("To get the last DOM element within elements, use the .last() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .last()
      .should("have.attr", "class", "breadcrumb-item active");
  });

  it("To get a DOM element at a specific index, use the .eq() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .eq(0)
      .should("contain", "Home");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .eq(1)
      .should("contain", "About Us");
    cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
      .children()
      .eq(2)
      .should("contain", "Contact Us");
  });

  it("To get the next sibling DOM element within elements, use the .next() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ul[class="traversal-food-list"]')
      .children()
      .should("have.length", 11);
    cy.get("#veggie").next().should("have.text", "Asparagus");
  });

  it("To get the previous sibling DOM element within elements, use the .prev() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('ul[class="traversal-food-list"]')
      .children()
      .should("have.length", 11);
    cy.get("#veggie").prev().should("have.text", "Figs");
  });

  it("To get all sibling DOM elements of elements, use the .siblings() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").siblings().should("have.length", 10);
  });

  it("To get all of the next sibling DOM elements within elements, use the .nextAll() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").nextAll().should("have.length", 4);
  });
  it("To get all previous sibling DOM elements within elements, use the .prevAll() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").prevAll().should("have.length", 6);
  });
  it("To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").prevUntil("#fruits").should("have.length", 5);
  });

  it("To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#fruits").nextUntil("#veggie").should("have.length", 5);
  });

  it("To remove DOM element(s) from the set of elements, use the .not() command.", function () {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="radio"]').not("[disabled]").should("have.length", "7");
  });

  it("To get DOM elements that match a specific selector, use the .filter() command.", function () {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('input[type="radio"]')
      .filter("[disabled]")
      .should("have.attr", "value", "cabbage");
  });

  it("To get descendant DOM elements of the selector, use the .find() command.", function () {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get('ul[class="traversal-drinks-list"]')
      .find('li[id="coffee"]')
      .should("have.text", "Coffee");
  });

  it.only("To get parent DOM element of elements, use the .parent() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#milk")
      .parent()
      .should("have.attr", "class", "traversal-drinks-list");
  });

  it.only("To get parents DOM element of elements, use the .parents() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#milk")
      .parents()
      .should("have.attr", "class", "traversal-drinks-list");
    cy.get("#milk").parents("div").should("have.attr", "class", "thumbnail");
    cy.get("#milk").parents("div").find('[class="col-sm-12"]');
    cy.get("#milk").parents("body");
  });

  it.only("To get the closest ancestor DOM element, use the .closest() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#milk").closest("div").should("have.class", "thumbnail");
  });

  it.only("To get parents DOM element of elements until other element, use the .parentsUntil() command.", function () {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get("#milk")
      .parentsUntil('div[class="col-sm-12"]')
      .should("have.length", 2);
  });
});
