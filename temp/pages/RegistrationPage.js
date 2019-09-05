"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const WebUtils_1 = require("../common/WebUtils");
class RegistrationPage {
    constructor() {
        this.firstNameField = protractor_1.element(protractor_1.by.name("firstname"));
        this.lastNameField = protractor_1.element(protractor_1.by.name("lastname"));
        this.emailField = protractor_1.element(protractor_1.by.name("email"));
        this.passwordField = protractor_1.element(protractor_1.by.name("password"));
        this.confirmField = protractor_1.element(protractor_1.by.id("confirm_password"));
        this.checkboxField = protractor_1.element(protractor_1.by.css(".choice"));
        this.registerButton = protractor_1.element(protractor_1.by.buttonText("Register"));
        this.utility = new WebUtils_1.WebUtils();
    }
    SetFirstName(firstName) {
        this.utility.WaitForElement(this.firstNameField);
        this.SetText(firstName, this.firstNameField);
    }
    SetLastName(lastName) {
        this.utility.WaitForElement(this.lastNameField);
        this.SetText(lastName, this.lastNameField);
    }
    SetEmail(email) {
        this.utility.WaitForElement(this.emailField);
        this.SetText(email, this.emailField);
    }
    SetPassword(password) {
        this.utility.WaitForElement(this.passwordField);
        this.SetText(password, this.passwordField);
    }
    ConfirmPassword(password) {
        this.utility.WaitForElement(this.confirmField);
        this.SetText(password, this.confirmField);
    }
    ConfirmTermsAndCond() {
        this.utility.WaitForElement(this.checkboxField);
        this.checkboxField.click();
    }
    ClickSignIn() {
        this.registerButton.click();
    }
    Register(firstName, lastName, email, password) {
        this.utility.WaitForElement(this.firstNameField);
        this.SetFirstName(firstName);
        this.SetLastName(lastName);
        this.SetEmail(email);
        this.SetPassword(password);
        this.ConfirmPassword(password);
        this.ConfirmTermsAndCond();
        this.ClickSignIn();
    }
    SetText(text, field) {
        field.clear();
        field.sendKeys(text);
    }
}
exports.RegistrationPage = RegistrationPage;
