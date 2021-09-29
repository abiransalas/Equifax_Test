Feature: Buy Item

    I want to buy a backpack in Swag Labs

    Scenario: Buy A Backpack In Swag Labs
        Given I open Swag Labs login page
        When I type in 
            | username      | password     |
            | standard_user | secret_sauce |
        And I click on Sign in button
        Then should be shown the home page
        And I add to cart a Backpack and Bike Light
        And I open the cart and checkout
        And I put the info in checkout
            | firstname     | lastname     | zipcode |
            | Abiran        | Salas        | 00010   |
        And I click on Continue button
        Then should be shown a Backpack and Bike Light in checkout overview
        And I click on Finish button
        Then should be shown my order is complete
