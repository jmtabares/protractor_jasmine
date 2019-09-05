"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("TODO app", () => {
    const url = "http://todomvc.com/examples/angularjs/#/";
    it("should go to a valid URL", () => {
        protractor_1.browser.get(url);
        expect(protractor_1.browser.getCurrentUrl()).toContain(url);
    });
});
