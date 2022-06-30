describe('Example for writeFile and readFile', function () {

    it('Write to a text file test1.txt using writeFile', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'Minskole.com\n')
    })

    it('Append content to the end of the text file test1.txt using the flag a+', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'Minskole is the best IT traning center', { flag: 'a+' })
    })

    it('Write to a JSON file test2.json using writeFile', function () {
        cy.writeFile('cypress/fixtures/test2.json', { firstName: 'Atish', lastName: 'chikhale' })
    })

    it('Validate the content of both text and JSON file using readFile', function () {
        cy.readFile('cypress/fixtures/test1.txt').should('contain', 'Minskole')
        cy.readFile('cypress/fixtures/test1.txt').should('eq', 'Minskole.com\nMinskole is the best IT traning center')
        cy.readFile('cypress/fixtures/test2.json').its('firstName').should('eq', 'Atish')
    })
})
