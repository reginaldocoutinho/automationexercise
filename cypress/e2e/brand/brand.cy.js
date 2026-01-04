describe('Brand', () => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/')
        cy.url().should('eq', 'https://automationexercise.com/')
    })
    it('View & Cart Brand Products', () =>{
        cy.contains('a','Products').click();
        cy.contains('h2','Brands').should('be.visible');
        cy.get('.brands-name > .nav > :nth-child(1) > a').click();
        cy.url().should('include','Polo');
        cy.get('.features_items').should('be.visible');
        cy.get('.brands-name > .nav > :nth-child(2) > a').click();
        cy.url().should('include','/H&M');
        cy.get('.features_items').should('be.visible');
    })

})