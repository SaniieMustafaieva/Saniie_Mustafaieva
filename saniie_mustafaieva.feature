Feature: Find
In order to search for information
As a User
I need to enter the different value

  Scenario: search form validation
    Given user navigates to the website https://www.epam.com/.
    When user enters a value in the search fielg
    And user preses the button <Find>
    Then a new page is opening with search results

    Examples: 
      | value    | results |
      | cucumber | +       |
      | Gherkin  | +       |
      | $$@$@$@  | -       |
