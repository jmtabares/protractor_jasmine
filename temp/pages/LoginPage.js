"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.registration = protractor_1.element(protractor_1.by.xpath("//a[@data-ui-sref='signup']"));
        this.userName_field = protractor_1.element(protractor_1.by.name("email"));
        this.password_field = protractor_1.element(protractor_1.by.name("password"));
        this.signIn = protractor_1.element(protractor_1.by.buttonText("Sign In"));
    }
    OpenBrowser(url) {
        protractor_1.browser.get(url);
        protractor_1.browser.driver.manage().window().maximize();
    }
    SetLoginUserName(userName) {
        this.SetText(userName, this.userName_field);
    }
    SetLoginPassword(password) {
        this.SetText(password, this.password_field);
    }
    ClickSignIn() {
        this.signIn.click();
    }
    ClickRegister() {
        this.registration.click();
        //browser.driver.sleep(4000)
    }
    Login(userName, password) {
        this.SetLoginUserName(userName);
        this.SetLoginPassword(password);
        this.ClickSignIn();
    }
    SetText(text, field) {
        field.clear();
        field.sendKeys(text);
    }
}
exports.LoginPage = LoginPage;
