Feature: User Management
    As an admin
    Scenario: login to admin site
        Given login "<page>" is opened
        When  Username "<Username>" entered
        * password "<Password>" entered
        * login button pressed
        Then admin goes to the page "<HomePageUrl>"


        Examples:
            | page                                                               | Username | Password | HomePageUrl                                                             |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index |


    Scenario: navigate to Add User page
        Given admin clicks on Admin menu item "<adminHref>"
        And Add button pressed
        Examples:
            | adminHref                            |
            | /web/index.php/admin/viewAdminModule |


    Scenario: fill the form "Add User"
        Given page  with form is opened
        When in field "<UserRole>" selected value
        * in field "<Select>" selected value
        * in field "<PasswordInAddForm>" entered password
        * in field "<ConfirmPassword>" entered password
        * in EmployeeName field "<EmployeeName>" entered value
        * in field "<UsernameInAddForm>" entered username
        * Save button pressed
        Then open new page with admin's user among others

        Examples:
            | UserRole | Select  | PasswordInAddForm | ConfirmPassword | EmployeeName | UsernameInAddForm |
            | ESS      | Enaible | qweR12345@        | qweR12345@      | Odis Adalwin | Saniie            |



    Scenario: Chek the user is created
        Given page with users loaded
        Then created user is present
        Examples:
            | UsernameInAddForm |
            | Saniie            |


    Scenario: Field is appeared after Reset procedure
        Given page with users loaded
        When Edit button is pressed
        And Cancel button is pressed
        Then page with users profile is returned


    Scenario: Chek the delete function
        Given page with users loaded
        When Delete button is pressed
        And in the modal window "Yes,delete" button is pressed
        Then created user isn't present