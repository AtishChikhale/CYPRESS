describe("GET,POST,PUT,DELETE,", function () {
  it("GET API", function () {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    }).then(function (res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.be.a("array");
      expect(res.body).to.have.property("page", 2);
    });
  });
  it("POST API", function () {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        id: 7,
        email: "sample@gmail.com",
        first_name: "rahul",
        last_name: "ratnakar",
      },
    }).then(function (res) {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("id", 7);
    });
  });
  it("PUT API", function () {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        id: 1,
        email: "sample@gmail.com",
        first_name: "ramdev",
        last_name: "lala",
      },
    }).then(function (res) {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("id", 1);
    });
  });
  it("DELETE API", function () {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users",
    }).then(function (res) {
      expect(res.status).to.equal(204);
    });
  });
});
