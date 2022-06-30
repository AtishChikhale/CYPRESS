///<reference types="cypress"/>
describe('Checkbox, radio button, disebled enable',function(){
  it('verify the radio button',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('#radio-buttons').find('input').each(function(el){
      cy.wrap(el).check().should('be.checked')
    })
  })
  it('verify the checkbox',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('input[type="checkbox"]').each(function(el){
      cy.wrap(el).check().should('be.checked')
      cy.wrap(el).uncheck().should('not.be.checked')
    })
  })
  it('verify the drop down',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let selectedValue = ['C#','Maven','CSS']
    cy.get('.section-title').first().find('select').each(function(el,index){
      cy.wrap(el).select(selectedValue[index]).should('contain',selectedValue[index])
    })
  })
  it('verify the radio buttons with disebled',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').eq(0).check().should('be.checked')
    cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').eq(1).should('be.disabled')
    cy.get('#radio-buttons-selected-disabled').find('input[type="radio"]').eq(2).check().should('be.checked')
  })
  it('Verify dropdown with disebled',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('#fruit-selects').select(0).should('have.value','apple')
    cy.get('#fruit-selects').find('option[value="orange"]').should('be.disabled')
    cy.get('#fruit-selects').select(2).should('have.value','pear')
    cy.get('#fruit-selects').select(3).should('have.value','grape')
  })
})