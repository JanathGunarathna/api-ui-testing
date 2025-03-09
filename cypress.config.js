const EMPLOYEE_NAME_INPUT = 'input[placeholder="Type for hints..."][data-v-1f99f73c]';
const JOB_TITLE_DROPDOWN = '.oxd-select-text--after:nth-child(2)';
const SUB_UNIT_DROPDOWN = '[class*="oxd-select-text"]:nth-child(1)';
const INCLUDE_DROPDOWN = '[class*="oxd-select-text"]:last-child';
const REVIEW_STATUS_DROPDOWN = '.oxd-select-text-input';
const FROM_DATE_INPUT = 'input[placeholder="dd-mm-yyyy"]:nth-child(1)';
const TO_DATE_INPUT = 'input[placeholder="dd-mm-yyyy"]:last-child';
const SEARCH_BUTTON = 'button[type="submit"]';
const RESET_BUTTON = 'button[type="reset"]';

// Approach 1: Page Object Model
class PerformanceReviewPage {
    static fillReviewForm(employeeName, jobTitle, subUnit, includeType, status, fromDate, toDate) {
        cy.get(EMPLOYEE_NAME_INPUT).type(employeeName);
        cy.get(JOB_TITLE_DROPDOWN).click().contains(jobTitle).click();
        cy.get(SUB_UNIT_DROPDOWN).click().contains(subUnit).click();
        cy.get(INCLUDE_DROPDOWN).click().contains(includeType).click();
        cy.get(REVIEW_STATUS_DROPDOWN).click().contains(status).click();
        cy.get(FROM_DATE_INPUT).type(fromDate);
        cy.get(TO_DATE_INPUT).type(toDate);
    }

    static submitForm() {
        cy.get(SEARCH_BUTTON).click();
    }

    static resetForm() {
        cy.get(RESET_BUTTON).click();
    }
}

// Approach 2: Using Custom Commands
Cypress.Commands.add('fillPerformanceReview', (data) => {
    cy.get(EMPLOYEE_NAME_INPUT).type(data.employeeName);
    cy.get(JOB_TITLE_DROPDOWN).click();
    cy.contains(data.jobTitle).click();
    cy.get(SUB_UNIT_DROPDOWN).click();
    cy.contains(data.subUnit).click();
    cy.get(INCLUDE_DROPDOWN).click();
    cy.contains(data.includeType).click();
    cy.get(REVIEW_STATUS_DROPDOWN).click();
    cy.contains(data.status).click();
    cy.get(FROM_DATE_INPUT).type(data.fromDate);
    cy.get(TO_DATE_INPUT).type(data.toDate);
});

// Approach 3: Using Cucumber Step Definitions
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I fill in the performance review form with following details:', (dataTable) => {
    const formData = dataTable.rowsHash();
    
    cy.get(EMPLOYEE_NAME_INPUT).type(formData['Employee Name']);
    cy.get(JOB_TITLE_DROPDOWN).click();
    cy.contains(formData['Job Title']).click();
    cy.get(SUB_UNIT_DROPDOWN).click();
    cy.contains(formData['Sub Unit']).click();
    cy.get(INCLUDE_DROPDOWN).click();
    cy.contains(formData['Include']).click();
    cy.get(REVIEW_STATUS_DROPDOWN).click();
    cy.contains(formData['Review Status']).click();
    cy.get(FROM_DATE_INPUT).type(formData['From Date']);
    cy.get(TO_DATE_INPUT).type(formData['To Date']);
});

When('I click the search button', () => {
    cy.get(SEARCH_BUTTON).click();
});

Then('I should see the filtered results', () => {
    // Add assertions based on expected results
    cy.get('.oxd-table-body')
        .should('exist')
        .and('be.visible');
});