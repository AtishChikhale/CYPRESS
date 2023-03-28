///<reference types="cypress"/>

//GET  =>For retrive the data


describe("get", () => {
  it("get call", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.headers["Accept-Encoding"]).to.eq("gzip, deflate");
      expect(res.body.headers["Content-Type"]).to.eq("application/json");
      expect(res.body.url).to.eqls("https://httpbin.org/get");
    });
  });
});
