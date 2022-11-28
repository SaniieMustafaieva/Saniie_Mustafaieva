Feature: Apply for a job
  As a User
  I need to enter the allowed value

  Scenario: Chek the possibility to apply for a job
    Given user opens url https://www.epam.com/careers/job-listings?query=java&country=all
    And user presses on button "VIEW AND APPLY" on the first available job
    When user enters first name in field <First Name>
    * user enters last name in field <Last Name>
    * user enters email in field <Email>
    * user selects country in <Country combo-box>
    * user enters city name in field <City>
    * user ticks chekbox "gdprConsent"
    * user ticks chekbox "subscription"
    * user presses the button "SUBMIT"
    Then new page is opening with <Result> text

    Examples:
      | First Name | Last Name  | Email                | Country combo-box | City | Result                                                                                            |
      | Taras      | Shevchenko | shevchenko@gmail.com | Ukraina           | Kyiv | Thank you for your submission! Our Talent Acquisition team will contact you with further details. |