Feature: User Management

  Scenario Outline: As a admin, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I go to the home page 

    Examples:
      | username | password |
      | Admin    | admin123 |
