import loginPage from '../../PageObjects/loginPage'
import inventoryPage from '../../PageObjects/inventoryPage'
import cartPage from '../../PageObjects/cartPage'
import checkoutPage from '../../PageObjects/checkoutPage'
import overviewPage from '../../PageObjects/overviewPage'
import completePage from '../../PageObjects/completePage'

Given('I open Swag Labs login page', () => {
    cy.visit("/#/login");
});

When('I type in', (datatable) => {
    datatable.hashes().forEach(element => {
        loginPage.typeUsername(element.username);
        loginPage.typePassword(element.password);
    })
});

Then('I click on Sign in button', () => {
    loginPage.clickLoginButton();
});

Then('should be shown the home page', () => {
    inventoryPage.elements.titleSpan().should('have.text', 'Products');
});

Then('I add to cart a Backpack and Bike Light', () => {
    inventoryPage.clickBackpackAddCartButton();
    inventoryPage.clickBikeLightAddCartButton();
    inventoryPage.elements.numberItemCart().should('have.text', '2');
});

Then('I open the cart and checkout', () => {
    inventoryPage.clickCartButton();
    cartPage.elements.firtItemName().should('have.text', 'Sauce Labs Backpack');
    cartPage.elements.secondItemName().should('have.text', 'Sauce Labs Bike Light');
    cartPage.clickCheckoutButton();
});

Then('I put the info in checkout', (datatable) => {
    datatable.hashes().forEach(element => {
        checkoutPage.typeFirstName(element.firstname);
        checkoutPage.typeLastName(element.lastname);
        checkoutPage.typeZipCode(element.zipcode);
    })
});

Then('I click on Continue button', () => {
    checkoutPage.clickContinueButton();
});

Then('should be shown a Backpack and Bike Light in checkout overview', () => {
    overviewPage.elements.firtItemName().should('have.text', 'Sauce Labs Backpack');
    overviewPage.elements. secondItemName().should('have.text', 'Sauce Labs Bike Light');
});

Then('I click on Finish button', () => {
    overviewPage.clickFinishButton();
});

Then('should be shown my order is complete', () => {
    completePage.elements.finalText().should('have.text', 'THANK YOU FOR YOUR ORDER')
})




