describe('Search Product', ()=> {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    })
    it('Test Search Product', ()=> {
        cy.url().should('eq','https://automationexercise.com/');
        cy.contains('a','Products').click();
        cy.url().should('include','/products');
        cy.get('#search_product').type('Tshirt');
        cy.get('#submit_search').click();
        cy.contains('.productinfo','Tshirt').should('be.visible');
        cy.get('.productinfo').should('have.length', 6);
    })
})