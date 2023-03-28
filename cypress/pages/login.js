export class loginOrangeHRM {
  navigation() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  loginCredentials(userName, password) {
    cy.get('[name="username"]').type(userName);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
  }

  validateLogo() {
    cy.get('img[alt="client brand banner"]').should("be.visible");
  }

  validatErrorMsg() {
    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should(
      "be.visible"
    );
  }
}
