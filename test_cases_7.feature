Feature: Language
In order to search for information
As a User
Scenario: Site language is changed check
Given user opens url https://www.epam.com/
And user presses the language select's button 
When user selectes the language 
Then site is opening on the another language 
And the main page displays information correct for the region with the selected language 
