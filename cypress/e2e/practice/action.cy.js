///<reference types="cypress"/>
describe('Action',function(){
    it('Drag and Drope button',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p > :nth-child(1)').should('have.text','Dropped!')
        cy.get('#droppable').find('p').should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;')
    })
    it('Doubble Click',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').as('ClickAble')
        cy.get('@ClickAble').should('have.class','div-double-click').dblclick()
        cy.get('@ClickAble').should('have.class','div-double-click double')
    })
    it('Scroll view',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Action')
    })
    it('Hower Button',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.contains('Hover Over Me First!').trigger('mouseover',{force:true})
        cy.contains('Link 1').click({force:true})
    })
    it.only('Click and hold',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').click().should('have.text','Dont release me!!!')
        cy.get('#click-box').trigger('mousedown',{which:1}).should('have.text','Well done! keep holding that click now.....')
    })
})