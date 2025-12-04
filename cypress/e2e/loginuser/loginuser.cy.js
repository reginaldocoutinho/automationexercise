describe('Login user', ()=> {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })
    it.only('Login User with correct email and password', () =>  {
        cy.contains('h2','New User Signup!')
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('h2','Login to your account')
        cy.signUser();
    })
    it('Login User with incorrect email and password', () => {
        cy.contains('a', 'Signup / Login')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('h2','Login to your account')
        cy.get('[data-qa="login-email"]').type('teste7@outlook.com') //Precisa ter um usuário criado para testar
        cy.get('[data-qa="login-password"]').type('wrongPassword')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('p','Your email or password is incorrect!')
    })
    it('Logout User', () => {
        cy.contains('a', 'Signup / Login').click()
        cy.contains('h2','New User Signup!')
        cy.createUser();
        cy.logoutUser();
    })
})