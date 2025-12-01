describe('Subscription in Home Page', () => {
    beforeEach(()=> {
        cy.visit('https://automationexercise.com');
    })
    it('Verify Subscription in home page', () => {
        cy.url().should('eq','https://automationexercise.com/');
        cy.scrollTo('bottom');
        cy.contains('h2','Subscription');
        cy.get('#susbscribe_email').type('joanhiah533@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('be.visible');
    })
})