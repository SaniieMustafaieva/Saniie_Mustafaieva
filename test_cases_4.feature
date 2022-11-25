Feature: Job search
  As a User
  I need to search for jobs

  Scenario: cheking the functionality of the job search form
    Given user opens url https://www.epam.com/careers
    When user enters a value in the fields <keyword>, <location>, <skills>
    Then a new page is opening with search results containing jobs for <result>

    Examples:
      | keyword  | location              | skills     | result                                                                  |
      | Java     | All locations         | All skills | java                                                                    |
      | @##$%%%% | All Cities in Croatia | All skills | Sorry, your search returned no results. Please try another combination. |