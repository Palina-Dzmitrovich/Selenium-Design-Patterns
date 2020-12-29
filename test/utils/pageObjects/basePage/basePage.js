const webdriver = require('selenium-webdriver');
    

class basePage {
    
    constructor(browser) {
        this.browser = browser;
    }

    makeAPause(waitInMillisecond) {
       return this.browser.sleep(waitInMillisecond);
    }

    getCurrentUrl() {
        return this.browser.getCurrentUrl();
    }

    open() {
        return this.browser.get(this.url);
    }

    switchToFrame(id) {
        return this.browser.switchTo().frame(id);
    }

    switchToDefault() {
        return this.browser.switchTo().defaultContent();
        
    }


}

module.exports = basePage;