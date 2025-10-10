describe('Login user', ()=> {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        
    })
    it('Login User with correct email and password', () =>  {
        cy.createuser()
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('h2','Login to your account')
        cy.get('[data-qa="login-email"]').type('teste4@outlook.com') //Precisa ter um usuário criado para testar
        cy.get('[data-qa="login-password"]').type('teste')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('a','Logout')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.contains('b', 'Account Deleted!')
    })
    it('Login User with incorrect email and password', () => {
        cy.contains('a', 'Signup / Login')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('h2','Login to your account')
        cy.get('[data-qa="login-email"]').type('teste4@outlook.com') //Precisa ter um usuário criado para testar
        cy.get('[data-qa="login-password"]').type('wrongPassword')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('p','Your email or password is incorrect!')
    })
    it('Logout User', () => {
        cy.createuser()
    })
})