///<reference types="cypress"/>
describe('write and read file',function(){
    it('write file',function(){
        cy.writeFile('sample.txt','Hello World',{timeout:5000})
    })
})