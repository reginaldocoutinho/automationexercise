// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createuser', (email = 'teste4@outlook.com', password = 'teste') => {
    cy.url().should('eq', 'https://automationexercise.com/')
      cy.contains('a', 'Signup / Login').click()
      cy.contains('h2','New User Signup!')
      cy.get('[data-qa="signup-name"]').type('testname')
      cy.get('[data-qa="signup-email"]').type(email)
      cy.get('[data-qa="signup-button"]').click()
      cy.contains('b','Enter Account Information')
      cy.get('#id_gender1').click()
      cy.get('[data-qa="password"]').type(password)
      cy.get('[data-qa="days"]').select('30')
      cy.get('[data-qa="months"]').select('October')
      cy.get('[data-qa="years"]').select('1998')
      cy.get('#newsletter').click()
      cy.get('#optin').click()
      cy.get('[data-qa="first_name"]').type("First name")
      cy.get('[data-qa="last_name"]').type("Last name")
      cy.get('[data-qa="company"]').type("Company")
      cy.get('[data-qa="address"]').type("street addres")
      cy.get('[data-qa="country"]').select('Canada')
      cy.get('[data-qa="state"]').type('Ontario')
      cy.get('[data-qa="city"]').type('Toronto')
      cy.get('[data-qa="zipcode"]').type('M5V 3L9')
      cy.get('[data-qa="mobile_number"]').type('5516991509030')
      cy.get('[data-qa="create-account"]').click()
      cy.contains('b','Account Created!')
      cy.get('[data-qa="continue-button"]').click()
      cy.contains('a','Logout')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

