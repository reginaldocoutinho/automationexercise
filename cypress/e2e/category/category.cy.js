describe('Category',() => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/')
        cy.url().should('eq', 'https://automationexercise.com/')
    })
    it('View Category Products',() =>{
        cy.contains('h2','Category').should('be.visible');
        cy.get('#accordian').should('be.visible');
        cy.contains('.panel-title a', 'Women').click();
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
        cy.contains('.title','Women - Dress Products').should('be.visible');
        cy.contains('.panel-title a', 'Men').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
        cy.contains('.title', 'Men - Tshirts Products').should('be.visible');
    })
})
