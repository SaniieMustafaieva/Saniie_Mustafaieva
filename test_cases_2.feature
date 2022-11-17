Feature: Social Link
In order to search for information
As a User

  Scenario: Link to the social network "Facebook" is active
    Given user opens url https://www.epam.com/
    When user presses to the Facebook's link
    Then new page is opening with the company's Facebook account
