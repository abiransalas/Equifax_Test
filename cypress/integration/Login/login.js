import loginPage from '../../PageObjects/loginPage'
import inventoryPage from '../../PageObjects/inventoryPage'

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

Then('should be shown locked error message', () =>{
    loginPage.elements.errorLockedMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
});

Then('should be shown error message', () =>{
    loginPage.elements.errorLockedMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
});