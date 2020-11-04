
// <reference types="cypress" />


describe('Actions', () => {
    before(() => {
      cy.visit('http://automationpractice.com/index.php?')
    })

 
describe ('Adcionar o produto no carrinho ', () => {
    it('Dado que escolho um produto',() => {
        cy.selecionarUmProduto()
    })
    it('E adciono um produto no carrinho e continue comprando ', ()=>{
        cy.get('.layer_cart_cart').find('.continue > span')
        cy.get(" .clearfix > .layer_cart_cart > .button-container > span").click()
        cy.get('.clearfix > .layer_cart_product > span').click()        
        
    })
    it('E adciono um novo o produto no carrinho',() => {
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get('.icon-plus').click()
        cy.get(' .box-cart-bottom #add_to_cart > button > span').click()
        cy.get('.product_attributes > #quantity_wanted_p > .product_quantity_up > span').click()     //clicar no botão mais um
        
        
    })
    it('E envio para a lista de compras',() => {
        cy.get('.layer_cart_cart').find('.button-medium > span')
        cy.get(".clearfix > .layer_cart_cart > .button-container > a > span").click()        
        
    })
    it('Então o produto foi adcionado no carrinho',() => {
        cy.get('#order-detail-content #cart_summary  #product_3_13_0_0 > .cart_description > .product-name > a')  
        .should('have.text', 'Printed Dress') 
        cy.get(".shopping_cart > a > span.ajax_cart_quantity")
        .should('have.text', '2') 
    })

    it('E clico em prosseguir', () => {
        cy.get(".cart_navigation > .button > span").click()
        
})


})
})