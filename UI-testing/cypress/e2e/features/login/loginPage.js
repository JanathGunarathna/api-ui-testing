const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
const USERNAME = 'input[name="username"]'; 
const PASSWORD = 'input[name="password"]';
const SUBMIT_BUTTON = 'button.orangehrm-login-button';
const DASHBOARD_BREADCRUMB = '.oxd-topbar-header-breadcrumb-module';
const ERROR_MESSAGE = '.oxd-alert-content-text'

class LoginPage {

    static visit(){
        cy.visit(URL); 
    }

    static enterUserName(userName){
        cy.get(USERNAME).type(userName);
    }

    static enterPassword(password){
        cy.get(PASSWORD).type(password); 
    }

    static submit(){
        cy.get(SUBMIT_BUTTON).should("exist").click(); 
    }

    static seeHomePage(){
        cy.get(DASHBOARD_BREADCRUMB).should("be.visible"); 
    }
     
    static getErrorMessage(error) {
        cy.get(ERROR_MESSAGE).contains(error);
    }

}

export default LoginPage