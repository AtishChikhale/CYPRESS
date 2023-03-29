///<reference types="cypress"/>

describe("table", () => {
  beforeEach(() => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    cy.get(".btn-close").click();
    cy.get("#menu-customer > a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });
  it("check nuber of rows and column", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should(
      "have.length",
      10
    );
    cy.get(
      'table[class="table table-bordered table-hover"]>thead>tr>td'
    ).should("have.length", 7);
  });
  it("check cell data from specific row and column", () => {
    cy.get(
      'table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)'
    )
      .contains("princytrainings4@gmail.com")
      .should("be.visible");
  });
  it("Read all the row and column data int the first page", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.wrap($col).within(() => {
              cy.log($col.text());
            });
          });
        });
      }
    );
  });
  it.only("Pagination", () => {
    // let totalPages
    // cy.get(".col-sm-6.text-end").then((e) => {
    //   let myText = e.text();
    //   totalPages = myText.substring(
    //     myText.indexOf("(") + 1,
    //     myText.indexOf("Pages") - 1
    //   );
    //   cy.log("Total number of pages in a table ====> " + totalPages);
    // });

    let totalPages = 5;
    for (let p = 1; p <= 5; p++) {
      if (totalPages > 1) {
        cy.log("Active Page is ===>" + p);
        cy.get(".pagination>li:nth-child(" + p + ")").click();
        cy.wait(3000);
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((el) => {
                cy.log(el.text());
              });
            });
          }
        );
      }
    }
  });
});
