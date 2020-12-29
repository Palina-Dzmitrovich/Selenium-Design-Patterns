const {Builder, By, Key, until} = require('selenium-webdriver');

const basePage = require ('../basePage/basePage.js');
const elementOnThePage = require ('../elements/elementOnThePage.js');

class homePage extends basePage {
    constructor(browser) {
        super(browser);
        this.url = "https://www.epam.com/"
    }

    get contactUs() {
        return new elementOnThePage(this.browser, 'a.cta-button-ui');
    }
    

}

module.exports = homePage;