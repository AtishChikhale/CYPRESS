///<reference types="cypress"/>

describe('GET REQUEST API',function(){
    it('Verify the GET request for the single user',function(){
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users/2"
        }).then(function(res){
            expect(res.status).to.equal(200)
            expect(res.body.data).to.have.property("first_name","Janet")
        })
    })
    it('verify the GET Request for the List user',function(){
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2"
        }).then(function(res){
            expect(res.status).to.equal(200)
            expect(res.body.data).to.be.a('array')
            expect(res.body).to.have.property("page",2)
        })
    })
})



