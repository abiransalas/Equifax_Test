const loginPage = require("./loginPage");

class checkoutPage{

    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        zipcCodeInput: () => cy.get('#postal-code'),
        continueButton: () => cy.get('#continue')
    }

    typeFirstName(firstname){
        this.elements.firstNameInput().type(firstname);
    }

    typeLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }

    typeZipCode(zipcode){
        this.elements.zipcCodeInput().type(zipcode)
    }

    clickContinueButton(){
        this.elements.continueButton().click();
    }
}

module.exports = new checkoutPage();