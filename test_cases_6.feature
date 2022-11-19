Feature: Feedback function
In order to search for information
As a User
I need to enter the different value

  Scenario: Chek the possibility to send a feedback form
    Given user opens url https://www.epam.com/about/who-we-are/contact
    When user puts different value in the form
    Then new page is opened if correct value is used
    But if incorrect value is used new page will not open
    And an error message appears for an incorrectly filled form field

    Examples: 
      | correct value   | Thank you for contacting us. We will be in touch shortly to continue the conversation. |
      | incorrect value | message with error                                                                     |
