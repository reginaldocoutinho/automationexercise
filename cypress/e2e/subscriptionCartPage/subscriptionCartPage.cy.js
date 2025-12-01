describe('Subscription Cart Page', () => {
    beforeEach(()=> {
        cy.visit('https://automationexercise.com/');
    })
    it('Verify Subscription in Cart page', () =>{
        cy.url().should('eq','https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(3)').click();
        cy.scrollTo('bottom');
        cy.contains('h2','Subscription');
        cy.get('#susbscribe_email').type('joanhiah533@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('be.visible');
    })
})