describe('register user', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq', 'https://automationexercise.com/')
  })
  it('Sign Up', (email = 'testname7@outlook.com', senha = 'teste') => {
      cy.createUser();
    }),
    it('Place Order: Register while Checkout', () => {
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
    it.only('Place Order: Register before Checkout', () => {
      cy.contains('a', 'Signup / Login').click();
      cy.contains('h2','New User Signup!');
      cy.createUser();
      cy.get('@userName').then((retrievedName) => {
      cy.contains('b', retrievedName).should('be.visible');
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.contains('a','Cart').click();
      cy.get('.active').should('be.visible');
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
})