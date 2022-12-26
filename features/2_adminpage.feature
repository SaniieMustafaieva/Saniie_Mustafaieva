Feature: User Management

    Scenario Outline: As a admin, I can click to  "User Management" link and after click to "User" link

        Given I am on the admin page
        When I click to User Management link
        * I click to Users link
        Then I go to the Users Grid page