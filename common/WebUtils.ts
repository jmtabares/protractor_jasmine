import { browser, element, by, ElementFinder, ExpectedConditions } from "protractor";
export class WebUtils{
    WaitForElement(element: ElementFinder){
        var until = ExpectedConditions;
        browser.wait(until.presenceOf(element), 5000, 'Element taking too long to appear in the DOM');
    }

}