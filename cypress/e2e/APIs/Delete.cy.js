///<reference types="cypress"/>

describe("DELETE request",function(){
    it('DELETE API',function(){
        cy.request({
            method : "DELETE",
            url : "https://reqres.in/api/users",

        }).then(function(res){
            expect(res.status).to.equal(204)
        })
    })
})