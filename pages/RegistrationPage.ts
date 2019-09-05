
import { browser, element, by, ElementFinder, utils } from "protractor";
import { WebUtils } from "../common/WebUtils";
export class RegistrationPage{

    firstNameField = element(by.name("firstname"))
    lastNameField = element(by.name("lastname"))
    emailField = element(by.name("email"))
    passwordField = element(by.name("password"))
    confirmField = element(by.id("confirm_password"))
    checkboxField = element(by.css(".choice"))
    registerButton = element(by.buttonText("Register"))
    utility = new WebUtils();
    SetFirstName(firstName: string){
        this.utility.WaitForElement(this.firstNameField);
        this.SetText(firstName, this.firstNameField)
    }
    SetLastName(lastName: string){
        this.utility.WaitForElement(this.lastNameField);
        this.SetText(lastName, this.lastNameField)
    }
    SetEmail(email: string){
        this.utility.WaitForElement(this.emailField);
        this.SetText(email, this.emailField)
    }
    SetPassword(password: string){
        this.utility.WaitForElement(this.passwordField);
        this.SetText(password,this.passwordField)
    }
    ConfirmPassword(password: string){
        this.utility.WaitForElement(this.confirmField);
        this.SetText(password,this.confirmField)
    }
    ConfirmTermsAndCond(){
        this.utility.WaitForElement(this.checkboxField);
        this.checkboxField.click()
    }
    ClickSignIn(){
        this.registerButton.click();
    }
    Register(firstName: string, lastName: string, email: string, password: string){
        this.utility.WaitForElement(this.firstNameField);
        this.SetFirstName(firstName);
        this.SetLastName(lastName);
        this.SetEmail(email);
        this.SetPassword(password);
        this.ConfirmPassword(password);
        this.ConfirmTermsAndCond();
        this.ClickSignIn();
    }
    private SetText(text: string, field: ElementFinder ){
        field.clear();
        field.sendKeys(text);
    }

}