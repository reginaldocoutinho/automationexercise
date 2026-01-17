describe('Scroll', () => {
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/');
        cy.url().should('eq','https://automationexercise.com/');
    }),
    it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom');
        cy.contains('h2','Subscription');
        cy.get('#scrollUp > .fa').click();
        cy.get('.active > :nth-child(1) > h2')
        cy.contains('h2','Full-Fledged practice website for Automation Engineers').should('be.visible');
    })
})