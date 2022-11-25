Feature: Search
  In order to search for information
  As a User
  I need to enter the different search query

  Scenario: search form validation
    Given user navigates to the website https://www.epam.com/.
    When user enters a <query> in the search field
    And user presses the button "Find"
    Then a new page is opening with search results containing  <result> word


    Examples:
      | query    | result                                                                |
      | cucumber | cucumber                                                              |
      | Gherkin  | Gherkin                                                               |
      | $@$@$@   | Sorry, but your search returned no results. Please try another query. |
