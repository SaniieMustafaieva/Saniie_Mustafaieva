Feature: User Management
    As an admin
    Scenario: login to admin site
        Given login "<page>" is opened
        When  Username "<Username>" entered
        * password "<Password>" entered
        * login button pressed
        Then admin goes to the page "<HomePageUrl>" 


        Examples:
            | page                                                               | Username | Password | HomePageUrl                                                               |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index |
