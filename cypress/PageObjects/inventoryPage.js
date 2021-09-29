class inventoryPage{
    elements = {
        titleSpan: () => cy.get('.title'),
        backpackAddCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        bikeLightAddCartButton: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
        numberItemCart: () => cy.get('span[class="shopping_cart_badge"]'),
        cartButton: () => cy.get('a[class="shopping_cart_link"]') 

    }

    clickBackpackAddCartButton(){
        this.elements.backpackAddCartButton().click();
    }

    clickBikeLightAddCartButton(){
        this.elements.bikeLightAddCartButton().click();
    }

    clickCartButton(){
        this.elements.cartButton().click();
    }
}

module.exports = new inventoryPage();