//if there is page inside page then if we try to find out element which is inside page orignal we get the error
//such as element is not found

//in order to elliminate that issue we are using iframe in our code

//thre are three ways of write code for element inside element in cypress

///<reference types = "cypress"/>

describe("verify the functionality of iframe", () => {
  //1st Approch
  it("find the html element using JQuiry", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    // cy.contains("Home"); // Expected to find content: 'Home' nut never did

    //to overcome that error we are using 2 approch
    //1  find iframe HTML element using JQuiry
    //when we are using $ it means it JQuiry

    // contents() methods(JQ) => The contains method can also be used to get the content of an iframe, if the iframe is on the same domain as mai page.
    // find() methods(JQ) => The find method descendent elements of the selected element. A descendent is a child, grandchild, great-grandchild, and so on.

    cy.get("#frame").then(($Iframe) => {
      cy.log($Iframe); //iframe $Iframe.containts() give me document
      let body = $Iframe.contents().find("body");
      cy.log(body); // this command give me JQuiry elelment so i con apply cypress method on that so need to wrap it in cypress
      cy.wrap(body).as("elementBody");
      cy.get("@elementBody").contains("Home");
    });
  });

  //2nd aproch
  //1 . Find Iframe HTML elements Using Javascript'

  it("find the iframe html element using javascript", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then((el) => {
      let body = el["0"].contentDocument.body;
      cy.wrap(body).as("elementBody");
      cy.get("@elementBody").contains("Home");
    });
  });
});

//=======================================================================================

//it the HTML elemnt is in page inside page then it know as iframe
//2 approch =>1 By using jquiry 2. By using javascript

describe("Find html element ", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
  });
  it("find html element using Jquiry", () => {
    cy.get("#frame").then(($jQ) => {
      let body = $jQ.contents().find("body");
      cy.wrap(body).as("jQelement");
      cy.get("@jQelement")
        .find(".sub-heading")
        .should("have.contain", "Who Are We?");
    });
  });
  it("find html element by using js", () => {
    cy.get("#frame").then((js) => {
      let body = js[0].contentDocument.body;
      cy.wrap(body).as("jselement");
      cy.get("@jselement")
        .find(".sub-heading")
        .should("have.contain", "Who Are We?");
    });
  });
});

//================================================================================================

describe("Iframe rahulshetty Practice", () => {
  beforeEach(() => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice");
  });
  it("find html ele by using JQ method", () => {
    //cy.get('new-navbar-highlighter')
    cy.get("#courses-iframe").then(($jqele) => {
      let ele = $jqele.contents().find("body");
      cy.wrap(ele).as("jqelement");
      cy.get("@jqelement")
        .find(".text")
        .should(
          "have.contain",
          "See what our students say about us. We are proud to show some of best"
        );
    });
  });

  it("find html element by using javascript", () => {
    cy.get("#courses-iframe").then((ele) => {
      let body = ele[0].contentDocument.body;
      cy.wrap(body).as("jsele");
      cy.get("@jsele")
        .find(".text")
        .should(
          "have.contain",
          "See what our students say about us. We are proud to show some of best"
        );
    });
  });
});
