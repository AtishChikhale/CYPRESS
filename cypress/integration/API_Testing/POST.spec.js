///<reference types="cypress"/>

//Post =>create the data

describe("post", () => {
  it("post call", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        name: "name1",
        id: 45,
        city: "city",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.lessThan(600);
      expect(res.body.json.name).to.eq("name1");
    });
  });
});
