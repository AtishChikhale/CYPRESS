///<reference types="cypress"/>

describe("PUT request",function(){
    it('PUT API',function(){
        cy.request({
            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body:
                {
                    "id":1,
                    "email":"sample@gmail.com",
                    "first_name":"ramdev",
                    "last_name":"lala"
                }
        }).then(function(res){
            expect(res.status).to.equal(200)
            expect(res.body).to.have.property("id",1)
        })
    })
})