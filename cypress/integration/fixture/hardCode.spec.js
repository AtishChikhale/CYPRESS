///<reference types = "cypress"/>

describe("Fixture first", () => {
  it("Contact us", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("testName");
    cy.get('[name="last_name"]').type("testLastName");
    cy.get('[name="email"]').type("testName@gmail.com");
    cy.get('[name="message"]').type("this is test data");
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  let obj = {
    firstName: "testName2",
    lastName: "testLastName2",
    email: "testName2@gmail.com",
    comment: "this is test data using object",
    msg: "Thank You for your Message!",
  };
  it("contact us using object", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(obj.firstName);
    cy.get('[name="last_name"]').type(obj.lastName);
    cy.get('[name="email"]').type(obj.email);
    cy.get('[name="message"]').type(obj.comment);
    cy.get('[value="SUBMIT"]').click();
    cy.get("h1").should("have.text", obj.msg);
  });

  let obj2 = [
    {
      firstName: "testName2",
      lastName: "testLastName2",
      email: "testName2@gmail.com",
      comment: "this is test data using object",
      msg: "Thank You for your Message!",
    },
    {
      firstName: "testName3",
      lastName: "testLastName3",
      email: "testName3@gmail.com",
      comment: "this is test data using multiple object",
      msg: "Thank You for your Message!",
    },
  ];

  it("contact us using multiple objects", () => {
    obj2.forEach((el) => {
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.get('[name="first_name"]').type(el.firstName);
      cy.get('[name="last_name"]').type(el.lastName);
      cy.get('[name="email"]').type(el.email);
      cy.get('[name="message"]').type(el.comment);
      cy.get('[value="SUBMIT"]').click();
      cy.get("h1").should("have.text", el.msg);
    });
  });
});
