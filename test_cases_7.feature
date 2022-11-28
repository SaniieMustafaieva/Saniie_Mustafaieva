Feature: Language
    As a User
    Scenario: Site language is changed check
        Given user opens url https://www.epam.com/
        And user presses the language select's button
        When user selectes the <language>
        Then site is opened on the another language
        And URL is changed to <URL>
        Examples:
            | language            | URL                      |
            | Україна(Українська) | https://careers.epam.ua/ |
            | Hungary(English)    | https://careers.epam.hu/ |