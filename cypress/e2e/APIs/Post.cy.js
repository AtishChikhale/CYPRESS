///<reference types="cypress"/>

describe("POST request",function(){
    it('POST API',function(){
        cy.request({
            method : "POST",
            url : "https://reqres.in/api/users",
            body:
                {
                    "id":7,
                    "email":"sample@gmail.com",
                    "first_name":"rahul",
                    "last_name":"ratnakar"
                }
        }).then(function(res){
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property("id",7)
        })
    })
})