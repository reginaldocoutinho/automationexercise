describe('Product Cart', () => {
    beforeEach(()=> {
        cy.visit('https://automationexercise.com/');
        cy.url().should('eq','https://automationexercise.com/');
    })
    it('Add Products in Cart', ()=> {
        let priceProduct1;
        let qtdProduct1;
        let totalProduct1;
        let priceProduct2;
        let qtdProduct2;
        let totalProduct2;

        
        cy.contains('a','Products').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.contains('u','View Cart').click();
        cy.get('#cart_info_table tbody tr').should('have.length', 2);
        cy.get('#product-1 > .cart_price')
            .invoke('text')
            .then((priceText) => {
                priceProduct1 = parseInt(priceText.replace('Rs. ', '').trim());
            });
        cy.get('#product-1 > .cart_quantity > .disabled')
            .invoke('text')
            .then((qtdText)=>{
                qtdProduct1 = parseInt(qtdText.trim());
            })
        cy.get('#product-1 > .cart_total > .cart_total_price')
            .invoke('text')
            .then((totalText)=>{
                totalProduct1 = parseInt(totalText.replace('Rs. ', '').trim());
                
                const expectTotal = priceProduct1 * qtdProduct1;

                expect(totalProduct1).to.equal(expectTotal);
            });

        cy.get('#product-2 > .cart_price > p')
            .invoke('text')
            .then((priceText)=>{
                priceProduct2 = parseInt(priceText.replace('Rs. ', '').trim());
            });
        cy.get('#product-2 > .cart_quantity > .disabled')
            .invoke('text')
            .then((qtdText) => {
                qtdProduct2 = parseInt(qtdText.trim());
            })
        cy.get('#product-2 > .cart_total > .cart_total_price')
            .invoke('text')
            .then((totalText) => {
                totalProduct2 = parseInt(totalText.replace('Rs. ', '').trim());

                const expectTotal = priceProduct2 * qtdProduct2;

                expect(totalProduct2).to.equal(expectTotal);
            })
            
    }),
    it('Verify Product quantity in Cart', () =>{
        let qtd = 4;
        let qtdProduct;
        cy.contains('a','View Product').click();
        cy.url().should('include','product_details');
        cy.get('#quantity').clear();
        cy.get('#quantity').type(qtd);
        cy.contains('button','Add to cart').click();
        cy.contains('u','View Cart').click();
        cy.get('.disabled')
            .invoke('text')
            .then((qtdText) => {
                qtdProduct = parseInt(qtdText.trim());

                expect(qtdProduct).to.equal(qtd);
            })
    })
})