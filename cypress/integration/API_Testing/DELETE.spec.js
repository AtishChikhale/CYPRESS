//Delete request to delete data

///<reference types="cypress"/>

describe("DELETE", () => {
  it("delete", () => {
    cy.request({
      methods: "DELETE",
      url: "https://reqres.in/api/users/2",
      header: {
        Connection: "keep-alive",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
