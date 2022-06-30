// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
    cy.get("#txtUsername").type(username);
    cy.get("#txtPassword").type(password);
    cy.get("#btnLogin").click();
})
Cypress.Commands.add('ValidateContactUs',(first_name,last_name,email,message)=>{
      cy.get('input[name="first_name"]').type(first_name);
      cy.get('input[name="last_name"]').type(last_name);
      cy.get('input[name="email"]').type(email);
      cy.get('textarea[name="message"]').type(message);
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
