import { browser, element, by, ElementFinder } from "protractor";
export class LoginPage{

    registration = element(by.xpath("//a[@data-ui-sref='signup']"));
    userName_field = element(by.name("email"));
    password_field = element(by.name("password"));
    signIn =  element(by.buttonText("Sign In"));
    OpenBrowser(url: string){
        browser.get(url);
        browser.driver.manage().window().maximize()
    }
    SetLoginUserName(userName: string){
        this.SetText(userName, this.userName_field)
    }
    SetLoginPassword(password: string){
        this.SetText(password,this.password_field)
    }
    ClickSignIn(){
        this.signIn.click();
    }
    ClickRegister(){
        this.registration.click();        
    }
    Login(userName: string, password: string){
        this.SetLoginUserName(userName);
        this.SetLoginPassword(password);
        this.ClickSignIn();
    }
    private SetText(text: string, field: ElementFinder ){
        field.clear();
        field.sendKeys(text);
    }
}