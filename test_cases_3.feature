Feature: Hero menu's operation
In order to search for information
As a User

  Scenario: Chek hero menu's operation
    Given user opens url https://careers.epam.ua/
    When user presses to button "left arrow of hero menu"
    Then Movesto the next item in the link

    Examples: 
      | number of press | link content       |
      |               7 | LVIV IT CLUSTER    |
      |              10 | KHARKIV IT CLUSTER |
      |              11 | KRAN               |
