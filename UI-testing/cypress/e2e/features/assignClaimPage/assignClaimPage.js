class AssignClaimPage {
    static EMPLOYEE_INPUT = 'input[placeholder="Type for hints..."]';
    static EVENT_DROPDOWN = '.oxd-select-text-input';
    static CURRENCY_DROPDOWN = '.oxd-select-text-input';
    static REMARKS_TEXTAREA = '.oxd-textarea';
    static CREATE_BUTTON = 'button[type="submit"]';
    static CANCEL_BUTTON = 'button[type="button"]';

    static login(username, password) {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.url().should('not.include', '/auth/login');
    }

    static navigateToAssignClaim() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/assignClaim');
        cy.url().should('include', '/claim/assignClaim'); 
    }

    static enterEmployeeName(name) {
        cy.get(this.EMPLOYEE_INPUT).should('be.visible').type(name);
        cy.contains('.oxd-autocomplete-option', name).should('be.visible').click();
    }
    static selectEvent(eventName) {
        cy.get(this.EVENT_DROPDOWN).eq(0).click();
        cy.contains('.oxd-select-option', eventName).should('be.visible').click();
    }

    static selectCurrency(currency) {
        cy.get(this.CURRENCY_DROPDOWN).eq(1).click();
        cy.contains('.oxd-select-option', currency).should('be.visible').click();
    }

    static enterRemarks(remarks) {
        cy.get(this.REMARKS_TEXTAREA).should('be.visible').type(remarks);
    }

    static clickCreate() {
        cy.get(this.CREATE_BUTTON).should('be.visible').click();
    }

    static clickCancel() {
        cy.get(this.CANCEL_BUTTON).contains('Cancel').should('be.visible').click();
    }
}

export default AssignClaimPage;
