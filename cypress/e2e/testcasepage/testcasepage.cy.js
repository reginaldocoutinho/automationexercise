describe('Test Case Page', ()=> {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    })
    it('Verify  Test Cases Page', () => {
        cy.url().should('eq','https://automationexercise.com/');

        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.contains('b','Test Cases');
        cy.url().should('eq','https://automationexercise.com/test_cases')
    })
})