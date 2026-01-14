describe('Product Page', ()=>{
    beforeEach(()=> {
             cy.visit('https://automationexercise.com/');
    })
    it('Vefify All Products and product detail page', () => {
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should('eq','https://automationexercise.com/products');
        cy.contains('h2','All Products');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.url().should('include','product_details');
        //9. Verify that detail detail is visible: 
        // product name, category, price, availability, condition, brand
        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.contains('.product-information', 'Category:').should('be.visible');
        cy.contains('.product-information', 'Availability:').should('be.visible');
        cy.contains('.product-information', 'Condition:').should('be.visible');
        cy.contains('.product-information','Brand:').should('be.visible');
        
    }),
    it('Add review on product', () =>{
        cy.contains('a','Products').click();
        cy.url().should('include','products');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.contains('a','Write Your Review').should('be.visible');
        cy.get('#name').type('Teste Name');
        cy.get('#email').type('teste@email.com');
        cy.get('#review').type('Produto de ótima qualidade!');
        cy.get('#button-review').click();
        cy.get('.alert-success > span').should('be.visible');
    })
})