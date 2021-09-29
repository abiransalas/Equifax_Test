class cartPage{

    elements = {
        firtItemName: () => cy.get('#item_4_title_link'),
        secondItemName: () => cy.get('#item_0_title_link'),
        checkoutButton: () => cy.get('#checkout')
    }

    clickCheckoutButton(){
        this.elements.checkoutButton().click();
    }
}

module.exports = new cartPage();