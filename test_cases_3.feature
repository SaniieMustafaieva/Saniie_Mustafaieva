Feature: Hero menu's operation
In order to search for information
As a User

  Scenario: Chek hero menu's operation
    Given user opens url https://careers.epam.ua/
    When user presses to button "left arrow of hero menu"
    Then Moves to the next item in the link

   