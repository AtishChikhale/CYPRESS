describe("Xpath Locators", () => {
  it("Login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.xpath("(//input[@placeholder='Username'])[1]").type("Admin");
    cy.xpath("(//input[@placeholder='Password'])[1]").type("admin123");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
    cy.xpath("//div[@class='oxd-topbar-header-title']").should(
      "contain.text",
      "Dashboard"
    );
  });
});
