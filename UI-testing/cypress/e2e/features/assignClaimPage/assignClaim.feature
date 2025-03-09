Feature: Assign Claim
  As an admin
  I want to assign a claim to an employee
  So that I can process their expense claim

   Background:
    Given I am logged in as an admin
 
   Scenario: Assign a new claim to an employee
    Given I am on the assign claim page
    When I enter employee name "Jennifer Ratna Aniston"
    And I select event "Accommodation"
    And I select currency "Albanian Lek"
    And I enter remarks "Salary Increments"
    Then I click Create button

  Scenario: CancelSuccessfully claim assignment
    Given I am on the assign claim page
    When I enter employee name "Jennifer Ratna Aniston"
    And I select event "Accommodation"
    Then I click Cancel button

