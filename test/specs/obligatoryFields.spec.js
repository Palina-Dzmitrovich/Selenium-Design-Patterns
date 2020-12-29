const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const chai = require('chai');
const expect = chai.expect;

const pageFactory = require('../utils/pageObjects/pageFactory.js');

describe('`Contact Us` obligatory fields', function() {

        browser.manage().window().maximize();   
   
        it('should be hightlighted (active) if missed', async function() {
            
          let homePage = pageFactory.getPage('home', browser);
           let contactUsPage = pageFactory.getPage('contact', browser);

            await homePage.open();

            await homePage.makeAPause('5000');
            await homePage.contactUs.click();
            await homePage.makeAPause('3000');

            
            await contactUsPage.firstName.sendKeys('Иван');
            await contactUsPage.lastName.sendKeys('Иванов');
            await contactUsPage.email.sendKeys('supervanya@gmail.com');
            await contactUsPage.phoneNumber.sendKeys('+375296543211');

            await contactUsPage.makeAPause('3000');

            browser.executeScript("document.querySelector('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment').scrollIntoView(true);");

            await contactUsPage.makeAPause('3000');

            await contactUsPage.howDidYouFindOut.click();

            await contactUsPage.makeAPause('3000');

            await browser.actions()
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.ENTER)
          .perform();

            await contactUsPage.submitButton.click();

            let activeInput = await browser.executeScript('return document.activeElement.id');

            expect(activeInput).to.equal(await contactUsPage.personalInfoCheckBox.element.getAttribute('id'));

            await browser.quit();
                      

        });
  });


