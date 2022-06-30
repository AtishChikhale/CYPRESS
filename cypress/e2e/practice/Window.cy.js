/// <reference types="cypress"/>
describe("verify the window cmd in cy", function () {
  it("verify the window cmd reload,forword,back using JS", function () {
    cy.login("Admin", "admin123");
    cy.window().then(function (win) {
      win.location.reload();
    });
    cy.window().then(function (win) {
      win.history.forward();
      win.history.back();
    });
    cy.window().then(function (win) {
      expect(win.location.href).to.eqls("https://opensource-demo.orangehrmlive.com/index.php/dashboard")
    })
  })
  it("verify the window cmd reload,forword,back using cypress",function(){
    cy.login("Admin", "admin123")
    cy.reload()
    cy.go(1)
    cy.go(-10)
    cy.url().should('contain','open')
  })
})

