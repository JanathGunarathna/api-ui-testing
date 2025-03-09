import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./loginPage";



Given("I am on the login page", () => {
  LoginPage.visit(); 
});

When("I enter username with {string}", username => {
  LoginPage.enterUserName(username);
})

When("I enter password with {string}", password => {
  LoginPage.enterPassword(password);
})

When("I click on submit button", () => {
  LoginPage.submit();
})

Then("I should see the home page", () => {
  LoginPage.seeHomePage();
}); 

Then("I should see error message with {string}", error => {
  LoginPage.getErrorMessage(error);
}); 


    
