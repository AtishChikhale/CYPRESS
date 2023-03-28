///<reference types="cypress"/>

describe("Date Picker", () => {
  beforeEach(() => {
    cy.visit("https://preview.colorlib.com/theme/bootstrap/calendar-11/");
    cy.get("#pick-date").click();
  });
  it("Verify date before 200 days from now", () => {
    //to select date before 200 days
    let date = new Date();
    date.setDate(date.getDate() - 400);
    let pdate = date.getDate();
    let pyear = date.getFullYear();
    let pmonth = date.toLocaleDateString("default", { month: "long" });
    cy.log(pdate, pmonth, pyear);

    function selectY() {
      cy.get("#pick-date_root")
        .children()
        .find(".picker__header")
        .find(".picker__year")
        .then((el) => {
          cy.log(el);

          if (!el.text().includes(pyear)) {
            cy.get('[class="picker__nav--prev"]').click();
            selectY();
          }
        })
        .then(() => {
          cy.get("#pick-date_root")
            .children()
            .find(".picker__header")
            .find(".picker__month")
            .then((el) => {
              cy.log(el);
              if (!el.text().includes(pmonth)) {
                cy.get('[class="picker__nav--prev"]').click();
                selectY();
              }
            })
            .then(() => {
              cy.get("#pick-date_table")
                .children()
                .find("td")
                .contains(pdate)
                .click({ force: true });
            });
        });
    }
    selectY();
  });
});
