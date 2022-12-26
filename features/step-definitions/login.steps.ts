import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I go to the home page$/, async () => {
  assert.equal(await HomePage.isDashboardHeaderExists(), true);
});
