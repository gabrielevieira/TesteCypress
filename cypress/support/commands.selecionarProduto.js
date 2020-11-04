Cypress.Commands.add("selecionarUmProduto", ()  => {
    cy.get(".button-container").find('a[data-id-product="1"]')
    cy.get("#homefeatured .product-container > .right-block > .button-container > [data-id-product='1'] > span").click()
    
  });