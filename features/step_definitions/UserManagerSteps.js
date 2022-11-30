const assert = require('assert');
const { Given, When, Then, BeforeAll } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const driver = new webdriver.Builder().forBrowser("chrome").build();

async function openLoginPage(loginPageUrl) {
    await driver.get(loginPageUrl);
}

async function enterUserName(username) {
    await driver.wait(until.elementLocated(By.css(".orangehrm-login-layout")))
        .findElement(By.name('username'))
        .sendKeys(username);
}

async function enterPassword(password) {
    await driver.wait(until.elementLocated(By.css(".orangehrm-login-layout")))
        .findElement(By.name('password'))
        .sendKeys(password);
}

async function pressLoginButton() {
    await driver.wait(until.elementLocated(By.css(".orangehrm-login-layout")))
        .findElement(By.css('button[type="submit"]')).click();
}


Given('login {string} is opened', function (loginPageUrl) {
    openLoginPage(loginPageUrl)
});

When('Username {string} entered', function (username) {
    enterUserName(username)
});

Given('password {string} entered', function (password) {
    enterPassword(password)
});


Given('login button pressed', function () {
    pressLoginButton()
});


Then('admin goes to the page {string}', function (homePageUrl) {
    driver.wait(until.urlIs(homePageUrl)).then(function (isHomePageUrl) {
        assert.equal(isHomePageUrl, true, "Home page isn't opened")
    })
});