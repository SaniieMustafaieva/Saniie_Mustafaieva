Feature: Feedback function
  As a User
  I need to fill feedback form
  Scenario: Chek the possibility to send a feedback form
    Given user opens url https://www.epam.com/about/who-we-are/contact
    When user selects the reason in  <SELECT THE REASON FOR YOUR INQUIRY combo-box>
    * user enters first name in field <First Name>
    * user enters last name in field <Last Name>
    * user enters email in field <Email>
    * user enters phone number in field <PHONE>
    * user enters name of his company in field <COMPANY>
    * user enters his position in field <POSITION>
    * user selects contry in <LOCATION combo-box>
    * user enters city in field <City>
    * user enters answer to <HOW DID YOU HEAR ABOUT EPAM>
    * user ticks chekbox "gdprConsent"
    * user ticks chekbox "subscription"
    * user presses the button "SUBMIT"
    Then modal window will be opened with captcha
    Examples:
      | SELECT THE REASON FOR YOUR INQUIRY combo-box | First Name | Last Name  | Email                | PHONE          | COMPANY | POSITION | LOCATION combo-box | City | HOW DID YOU HEAR ABOUT EPAM |
      | General information Request                  | Taras      | Shevchenko | shevchenko@gmail.com | +3809312344098 | EPAM    | C-level  | Ukraina            | Kyiv | Worked at EPAM              |