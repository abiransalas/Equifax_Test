Feature: Login

    I want to log into Swag Labs

    Scenario: Swag Labs Login
        Given I open Swag Labs login page
        When I type in 
            | username      | password     |
            | standard_user | secret_sauce |
        And I click on Sign in button
        Then should be shown the home page

    Scenario: Swag Labs Locked User Login
        Given I open Swag Labs login page
        When I type in 
            | username        | password     |
            | locked_out_user | secret_sauce |
        And I click on Sign in button
        Then should be shown locked error message

    Scenario: Swag Labs Incorrect Login
        Given I open Swag Labs login page
        When I type in 
            | username        | password     |
            | locked_out_user | incorrect_sauce |
        And I click on Sign in button
        Then should be shown error message