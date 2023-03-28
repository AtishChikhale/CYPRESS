///<reference types = "cypress"/>

describe("Fixture", () => {
  let obj = [
    {
      firstName: "testName",
      lastName: "lastName",
      email: "testMail@gmail.com",
      msg: "this is data",
      successMsg:
        "Thanks for contacting us! We will get in touch with you shortly.",
    },
    {
      firstName: "testName1",
      lastName: "lastName2",
      email: "testMail2@gmail.com",
      msg: "this is data 2",
      successMsg:
        "Thanks for contacting us! We will get in touch with you shortly.",
    },
  ];

  it("fixture using object", () => {
    cy.visit("https://www.weifieldcontracting.com/contact/?");
    cy.get("#input_2_1_3").type(obj[0].firstName);
    cy.get("#input_2_1_6").type(obj[0].lastName);
    cy.get("#input_2_2").type(obj[0].email);
    cy.get("#input_2_3").type(obj[0].msg);
    cy.get("#gform_submit_button_2").click();
    cy.get("#gform_confirmation_message_2").should(
      "have.text",
      obj[0].successMsg
    );
  });

  it.only("using for each", () => {
    obj.forEach((el) => {
      cy.visit("https://www.weifieldcontracting.com/contact/?");
      cy.get("#input_2_1_3").type(el.firstName);
      cy.get("#input_2_1_6").type(el.lastName);
      cy.get("#input_2_2").type(el.email);
      cy.get("#input_2_3").type(el.msg);
      cy.get("#gform_submit_button_2").click();
      cy.get("#gform_confirmation_message_2").should(
        "have.text",
        el.successMsg
      );
    });
  });
});
