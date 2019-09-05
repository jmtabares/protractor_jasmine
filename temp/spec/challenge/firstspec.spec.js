"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("../../pages/LoginPage");
const RegistrationPage_1 = require("../../pages/RegistrationPage");
describe("Regfistration and Login functionality", () => {
    it("login functionality with valid credentials", () => {
        var loginPage = new LoginPage_1.LoginPage();
        var registrationPage = new RegistrationPage_1.RegistrationPage();
        loginPage.OpenBrowser("http://amasik.com/demo/angularjs/angular-app");
        loginPage.ClickRegister();
        registrationPage.Register("Hola", "Testing", "HolaTesting@gmail.com", "123456");
    });
    it("Login to App", () => {
        var loginPage = new LoginPage_1.LoginPage();
        loginPage.Login("HolaTesting@gmail.com", "124567");
    });
});
