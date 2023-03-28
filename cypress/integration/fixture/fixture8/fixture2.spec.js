/// <reference types = "cypress"/>

import userData from "../../../fixtures/f1/user_3.json";

const Data = require("../../../fixtures/f1/user_3.json");

describe("fixture", () => {
  it("using import statement", () => {
    cy.visit("https://www.weifieldcontracting.com/contact/?");
    cy.get("#input_2_1_3").type(userData.firstName);
    cy.get("#input_2_1_6").type(userData.lastName);
    cy.get("#input_2_2").type(userData.email);
    cy.get("#input_2_3").type(userData.msg);
    cy.get("#gform_submit_button_2").click();
    cy.get("#gform_confirmation_message_2").should(
      "have.text",
      userData.successMsg
    );
  });
  it("using require statement", () => {
    cy.visit("https://www.weifieldcontracting.com/contact/?");
    cy.get("#input_2_1_3").type(Data.firstName);
    cy.get("#input_2_1_6").type(Data.lastName);
    cy.get("#input_2_2").type(Data.email);
    cy.get("#input_2_3").type(Data.msg);
    cy.get("#gform_submit_button_2").click();
    cy.get("#gform_confirmation_message_2").should(
      "have.text",
      Data.successMsg
    );
  });
});
