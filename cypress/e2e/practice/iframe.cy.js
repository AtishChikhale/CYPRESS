describe("verify the  function of iframe ", function () {
  it.only("verify the iframe with jquery", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("#mce_0_ifr").then(($el) => {
      cy.wrap($el.contents().find("body")).as("iframebody");
      cy.get("@iframebody").should("have.attr", "data-id");
      cy.get("@iframebody").find("p").click().type("hello");
    });
  });

  it("verify the iframe with jquery", () => {
    cy.visit("https://webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then(($el) => {
      cy.wrap($el.contents().find("body")).as("iframebody");
      cy.get("@iframebody")
        .find(".active")
        .find("a")
        .should("have.text", "Home");
    });
  });

  it("verify the iframe with javscript", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("#mce_0_ifr").then((el) => {
      cy.wrap(el["0"].contentDocument.body).as("iframebody");
      cy.get("@iframebody").should("have.attr", "data-id");
      cy.get("@iframebody").find("p").click().type("hello");
    });
  });
  it("verify the iframe with javascript", () => {
    cy.visit("https://webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then(($el) => {
      cy.wrap($el["0"].contentDocument.body).as("iframebody");
      cy.get("@iframebody")
        .find(".active")
        .find("a")
        .should("have.text", "Home");
    });
  });
});
