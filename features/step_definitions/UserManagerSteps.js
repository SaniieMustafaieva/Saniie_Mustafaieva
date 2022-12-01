const assert = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
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


// Scenario 2
async function pressAddButton() {
    await driver.wait(until.elementLocated(By.css(".orangehrm-header-container")))
        .findElement(By.css('.oxd-button--secondary')).click();
}

Given('admin clicks on Admin menu item {string}', function (adminHref) {
    driver.wait(until.elementLocated(By.css('.oxd-main-menu'))).then(function () {
        driver.findElements(By.css(".oxd-main-menu-item-wrapper")).then(function (menuItems) {
            let adminMenu = menuItems.find(function (elem) {
                let currMenuItem = elem.findElement(By.css("a.oxd-main-menu-item"));
                return currMenuItem.getAttribute("href").then(function (href) {
                    return href.includes(adminHref)
                });
            });
            adminMenu.findElement(By.css("a.oxd-main-menu-item")).click()
        });
    })
});

Given('Add button pressed', function () {
    pressAddButton()
});

// scenario 3 add user

// function enterEmployeeName(employeename) {
//     driver.wait(until.elementLocated(By.css(".oxd-form"))).then(function (elem) {
//         // driver.findElement(By.xpath('//*/div[contains(@class, "oxd-input-group")]/div[1]/div'))
//         //     .then(function (employeeInput) {
//         //         console.log(employeeInput, "-0-00--")
//         //     })
//         driver.findElements(By.xpath('//*/div[contains(@class, "oxd-autocomplete-text-input--active")]/input'))
//             .then(function (elements) {
//                 console.log('input', elements)
//             })
//     })
// }

// Given('page  with form is opened', function () {
//     driver.wait(until.elementLocated(By.css(".oxd-form"))).then(function(){
//         //
//     })
// });

// When('in EmployeeName field {string} entered value', function (employeename) {
//     let elementIsAvailablePromise = driver.wait(until.elementLocated(By.xpath('//*/div[contains(@class, "oxd-input-field-bottom-space")]/div')));

//     elementIsAvailablePromise.then(function (element) {
//         // driver.findElement(By.xpath('//*/div[contains(@class, "oxd-autocomplete-text-input--active")]/input'))
//         // .sendKeys("O")
//         element.findElement(By.xpath('//*/div[contains(@class, "oxd-input-field-bottom-space")]/div/input'))
//         .sendKeys("dfdfd")
//             // .then(function(elems){
//             //     // elems.sendKeys("dfdfd")
//             //     console.log(elems, elems.getTagName());
//             // })
//     })
// });


Given('page  with form is opened', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('in field {string} selected value', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('in field {string} selected value', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Given('in field {string} entered password', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('in field {string} entered password', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('in EmployeeName field {string} entered value', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('in field {string} entered username', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('Save button pressed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('open new page with admin\'s user among others', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


//Scenario: Chek the user is created

Given('page with users loaded', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('created user is present', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

// Scenario: Field is appeared after Reset procedure

Given('page with users loaded', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Edit button is pressed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Cancel button is pressed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('page with users profile is returned', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


//Scenario: Chek the delete function

Given('page with users loaded', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Delete button is pressed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('in the modal window {string} button is pressed', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('created user isn\'t present', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
