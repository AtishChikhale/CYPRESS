///<reference types="cypress"/>

describe("Verify datePicker on webdriver website", () => {
  it("Verify datePicker website", () => {
    let date = new Date();
    cy.log(date.getFullYear());
    cy.log(date.getMonth());
    cy.log(date.getDate());

    let date2 = new Date();
    date2.setDate(date2.getDate() + 381);

    let year = date2.getFullYear();
    let numberMonth = date2.getMonth();
    let sDate = date2.getDate();
    let smonth = date2.toLocaleDateString("Default", { month: "long" });

    cy.log(smonth);
    cy.log(year);
    cy.log(sDate);

    cy.visit("http://www.webdriveruniversity.com/Datepicker/index.html");
    cy.get("#datepicker").click();

    function selectMonthAndDate() {
      cy.get(".datepicker-switch")
        .first()
        .then((el) => {
          if (!el.text().includes(year)) {
            cy.get(".next").last().click({ force: true });
            selectMonthAndDate();
          }
        });
      cy.get(".datepicker-switch")
        .first()
        .then((el) => {
          if (!el.text().includes(smonth)) {
            cy.get(".next").last().click({ force: true });
            selectMonthAndDate();
          }
        });
    }

    function selectDate() {
      cy.contains(sDate).click();
    }
    selectMonthAndDate();
    selectDate();
  });
});
