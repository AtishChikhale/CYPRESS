/// <reference types="cypress"/>

describe("ContactUs Form", () => {
  it("verify the ContactUs Form with Valid details", () => {
    cy.visit("https://mediaproper.com/contact-us");
    cy.contains("here").should("be.visible");
    cy.get("#input_1_1").type("user1");
    cy.get("#input_1_2").type("LastName");
    cy.get("#input_1_3").type("user1lastname@gamil.com");
    cy.get("#input_1_4").type("4545454545");
    cy.get("#input_1_5").type("www.userType.com");
    cy.get("#input_1_6").type("testCompany");
    cy.get("#input_1_7").type("please ignore this message");
    cy.get("#gform_submit_button_1").click();
    cy.get("#gform_confirmation_message_1").should(
      "have.text",
      "Thanks for contacting us! We will get in touch with you shortly."
    );
    cy.contains(
      "Thanks for contacting us! We will get in touch with you shortly."
    ).should("be.visible");
  });
  it.only("verify the ContactUs Form with Invalid details", () => {
    cy.visit("https://mediaproper.com/contact-us");
    cy.contains("here").should("be.visible");
    cy.get("#input_1_1").type("user1");
    cy.get("#input_1_2").type("LastName");
    cy.get("#input_1_3").type("user1lastnamegamil.com");
    cy.get("#input_1_4").type("4545454545");
    cy.get("#input_1_5").type("www.userType.com");
    cy.get("#input_1_6").type("testCompany");
    cy.get("#input_1_7").type("please ignore this message");
    cy.get("#gform_submit_button_1").click();
    cy.get('.gform_submission_error').should('be.visible')
    cy.get("#validation_message_1_3").should(
      "have.text",
      "The email address entered is invalid, please check the formatting (e.g. email@domain.com)."
    );
  });
});
