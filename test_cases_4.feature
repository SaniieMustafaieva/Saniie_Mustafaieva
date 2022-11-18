Feature: Job search
In order to search for information
As a User
I need to enter the different value

  Scenario: cheking the functionality of the job search form
    Given user opens url https://www.epam.com/careers
    When user enters a value in the fielgs <keyword>, <location>, <skills>
    Then a new page is opening with search results
