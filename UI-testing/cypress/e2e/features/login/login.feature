Feature: Login functionality

  As a invalid user
  I cannot log into application
  As a valid user
  I want to log into application

  Scenario: Invalid login
    Given I am on the login page
    When I enter username with "username hh"
    And I enter password with "password kjklj"
    And I click on submit button
    Then I should see error message with "Invalid credentials"

  Scenario: Valid login
    Given I am on the login page
    When I enter username with "Admin"
    And I enter password with "admin123"
    And I click on submit button
    Then I should see the home page



