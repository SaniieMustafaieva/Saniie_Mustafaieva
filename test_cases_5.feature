Feature: Apply for a job
In order to search for information
As a User
I need to enter the allowed value

  Scenario: Chek the possibility to apply for a job
    Given user opens url https://www.epam.com/careers/job-listings?query=java&country=all
    And user presses to button <VIEW AND APPLY>
    When user fills out the form correctly
    And user presses the button <SUBMIT>
    Then new page is opening the message with text "APPLY FOR"
