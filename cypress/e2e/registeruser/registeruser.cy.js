describe('register user', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq', 'https://automationexercise.com/')
  })
  it('Sign Up', (email = 'testname7@outlook.com', senha = 'teste') => {
      cy.contains('a', 'Signup / Login').click()
      cy.contains('h2','New User Signup!')
      cy.get('[data-qa="signup-name"]').type('testname')
      cy.get('[data-qa="signup-email"]').type(email)
      cy.get('[data-qa="signup-button"]').click()
      cy.contains('b','Enter Account Information')
      cy.get('#id_gender1').click()
      cy.get('[data-qa="password"]').type(senha)
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
      cy.contains('a','Logged in as')
      cy.contains('a','Delete Account').click()
      cy.contains('b', 'Account Deleted!')
      cy.get('[data-qa="continue-button"]').click()
    }),
    it.only('Place Order: Register while Checkout', () => {
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'). click();
      cy.get('.modal-footer > .btn').click();
      cy.contains('a','Cart').click();
      cy.contains('a','Proceed To Checkout').click();
      cy.get('.modal-body > :nth-child(2) > a > u').click();
      cy.createUser();
      cy.contains('a', 'Cart').click();
      cy.get('.col-sm-6 > .btn').click();
      cy.get('#address_delivery').should('be.visible');
      cy.get('#address_invoice').should('be.visible');
      cy.get('.form-control').type('Teste');
      cy.contains('a','Place Order').click();
      cy.get('[data-qa="name-on-card"]').type('teste man');
      cy.get('[data-qa="card-number"]').type('12344565566');
      cy.get('[data-qa="cvc"]').type('123');
      cy.get('[data-qa="expiry-month"]').type('10');
      cy.get('[data-qa="expiry-year"]').type(2026);
      cy.contains('button','Pay and Confirm Order').click();
      cy.contains('p','Congratulations! Your order has been confirmed!').should('be.visible');
      cy.deleteAccount();
    })
})