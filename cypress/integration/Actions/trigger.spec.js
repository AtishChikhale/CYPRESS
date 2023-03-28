describe("verify the action class functionality", () => {
  it("verify the action Scroll Functionality class", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions", { timeout: 2000 })
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", "Actions");
  });

  it("verify the class functionality", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
    cy.get("div #draggable").trigger("mousedown", { button: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#droppable").should("have.contain", "Dropped!");
  });

  it("verify the drag and drop option in web page", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#droppable").should("have.contain", "Dropped!");
  });

  it("verify dbl click over the element", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#double-click")
      .dblclick()
      .should("have.attr", "class", "div-double-click double");
  });
  it("verify the mouseOver contains", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get('[class="dropbtn"]').first().trigger("mouseover");
    cy.get('a[class="list-alert"]')
      .first()
      .click({ force: true })
      .should("have.text", "Link 1");
    cy.on("window:alert", (str) => {
      expect(str).to.eql("Well done you clicked on the link!");
    });
  });
});
