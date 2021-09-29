class overviewPage{

    elements = {
        firtItemName: () => cy.get('#item_4_title_link'),
        secondItemName: () => cy.get('#item_0_title_link'),
        finishButton: () => cy.get('#finish')
    }

    clickFinishButton(){
        this.elements.finishButton().click();
    }
}

module.exports = new overviewPage();