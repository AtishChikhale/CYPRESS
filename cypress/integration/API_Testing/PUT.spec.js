//Put request to update data

///<reference types="cypress"/>

describe("put", () => {
  it("put method", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("json");
      expect(res.body.json.name).to.eq("morpheus");
    });
  });
});
