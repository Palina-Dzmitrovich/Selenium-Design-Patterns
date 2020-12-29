const basePage = require('../../utils/pageObjects/basePage/basePage.js');
const homePage = require('../../utils/pageObjects/homePage/homePage.js');
const contactUsPage = require('../../utils/pageObjects/contactUsPage/contactUsPage.js'); 

class pageFactory {
    static getPage(pageName, browser) {
        switch(pageName) {
            case 'base':
                return new basePage(browser);
            case 'home':
                return new homePage(browser);
            case 'contact':
                return new contactUsPage(browser);
        }
    }
    
} 

module.exports = pageFactory;