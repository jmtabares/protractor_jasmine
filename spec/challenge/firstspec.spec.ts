import { browser, by } from "protractor";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
describe("Regfistration and Login functionality", ()=>
    {
        it("login functionality with valid credentials", () =>
        {
            var loginPage =  new LoginPage();
            var registrationPage = new RegistrationPage();
            loginPage.OpenBrowser("http://amasik.com/demo/angularjs/angular-app");
            loginPage.ClickRegister();
            registrationPage.Register("Hola","Testing", "HolaTesting@gmail.com","123456"); 
            
        });

        it("Login to App", () => {
            var loginPage =  new LoginPage();
            loginPage.Login("HolaTesting@gmail.com","124567");
        });    
    });