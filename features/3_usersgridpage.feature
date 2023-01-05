Feature: User Management

    Scenario Outline: As a admin, I click on Add button

        Given I am on the Users Grid page
        When I click on "Add" button
        Then I go to the User Added page


    Scenario: As a admin,I fill the form "Add User"
        Given I am on the User Added page
        When I select value in field Role <UserRole>
        * I enter password in field <PasswordInAddForm>
        * I select value in field Status <Status>
        * I enter value in EmployeeName field <EmployeeName>
        * I enter username in field <UsernameInAddForm>
        * I press Save button
        Then I go to the Users Grid page

        Examples:
            | UserRole | Status  | PasswordInAddForm | EmployeeName | UsernameInAddForm |
            | ESS      | Enabled | qweR12345@        | Odis Adalwin | Saniie            |



    Scenario: Chek the user is created
        Given I am on the Users Grid page
        Then created user is present <UsernameInAddForm>
        Examples:
            | UsernameInAddForm |
            | Saniie            |


    Scenario: Field is appeared after Reset procedure
        Given I am on the Users Grid page
        When I press Edit button for user <UserName>
        And I press Cancel button
        Then I go to the Users Grid page
        Examples:
            | UserName |
            | Saniie   |


    Scenario: Chek the delete function
        Given I am on the Users Grid page
        When I press Delete button for user <UserName>
        And in the modal window I press "Yes,delete" button
        Then there is no user with name <UserName>
        Examples:
            | UserName |
            | Saniie   |
