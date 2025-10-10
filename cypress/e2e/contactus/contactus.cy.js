describe('Contact Us Form', () => {
    beforeEach('', () => {
        cy.visit('https://automationexercise.com/')
    })
    it('Contact Us Form', () => {
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('[data-qa="name"]').type("TestName")
        cy.get('[data-qa="email"]').type("test@outlook.com")
        cy.get('[data-qa="subject"]').type("Subkect Test")
        cy.get('[data-qa="message"]').type("Test message 10/10/2025")
        cy.get(':nth-child(6) > .form-control').selectFile('cypress/fixtures/example.txt')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('.shop-menu > .nav > :nth-child(1)').should('be.visible')
    })
})