Feature: Social Link
  As a User

  Scenario: Link to the social network "Facebook" is working
    Given user opens url https://www.epam.com/
    When user presses on the Facebook's link
    Then new page is opening with the company's Facebook account at url https://www.facebook.com/EPAM.Global
