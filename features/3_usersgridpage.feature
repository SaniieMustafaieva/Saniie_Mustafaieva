Feature: User Management

    Scenario Outline: As a admin, I click on Add button

        Given I am on the Users Grid page
        When I click on "Add" button
        Then I go to the User Added page


    Scenario: As a admin,I fill the form "Add User"
        Given I am on the User Added page
        When I select value in field <UserRole>
        # * I select value in field <Status>
        # * I enter password in field <PasswordInAddForm>
        # * I enter password in field <ConfirmPassword>
        * I enter value in EmployeeName field <EmployeeName>
        * I enter username in field <UsernameInAddForm>
        # * I press Save button
        # Then I go to the Users Grid page

        Examples:
            | UserRole | Status  | PasswordInAddForm | ConfirmPassword | EmployeeName   | UsernameInAddForm |
            | ESS      | Enaible | qweR12345@        | qweR12345@      | Leny  Carvalho | Saniie            |



# Scenario: Chek the user is created
#     Given I am on the Users Grid page
#     Then created user is present
#     Examples:
#         | UsernameInAddForm |
#         | Saniie            |


# Scenario: Field is appeared after Reset procedure
#     Given I am on the Users Grid page
#     When I press Edit button
#     And I press Cancel button
#     Then page with users profile is returned


# Scenario: Chek the delete function
#     Given I am on the Users Grid page
#     When I press Delete button
#     And in the modal window I press "Yes,delete" button
#     Then created user isn't present