Feature: Insights articles
    As a User
    Scenario: Search for insights articles
        Given user opens the url https://www.epam.com/insights
        When user selects industries in field <industries>
        And user selects content types in field <content types>
        Then a new page is opening with results containing  <result> word

        Examples:
            | industries         | content types | result             |
            | Financial Services | Blogs         | Financial Services |