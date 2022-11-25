Feature: Hero banner's operation
  As a User

  Scenario: Chek hero menu's operation
    Given user opens url https://careers.epam.ua/
    When user presses on button "left arrow of hero banner"
    Then banner moves to the next item in the link
