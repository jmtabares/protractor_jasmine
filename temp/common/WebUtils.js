"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class WebUtils {
    WaitForElement(element) {
        var until = protractor_1.ExpectedConditions;
        protractor_1.browser.wait(until.presenceOf(element), 5000, 'Element taking too long to appear in the DOM');
    }
}
exports.WebUtils = WebUtils;
