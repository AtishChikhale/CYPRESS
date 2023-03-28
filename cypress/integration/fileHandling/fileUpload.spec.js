describe("File Uploads", () => {
  it("Single file upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("img.jpg");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get(".example > h3").should("have.text", "File Uploaded!");
  });
  it("file upload - rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "img.jpg",
      fileName: "myImg.jpg",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get(".example > h3").should("have.text", "File Uploaded!");
  });
  it("file upload - drag and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("img.jpg", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("img.jpg");
  });
  it("multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["img.jpg", "img1.jpg", "img2.jpg"]);
    cy.wait(5000);
    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
  });

  it.only("file upload - shadow dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get('[class="smart-browse-input"]', {
      includeShadowDom: true,
    }).attachFile("img.jpg");
    cy.wait(5000);
    cy.get('[class="smart-item-name"]',{includeShadowDom:true}).contains('img.jpg');
  });
});
