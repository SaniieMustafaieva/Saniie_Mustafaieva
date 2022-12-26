import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import adminPage from "../pageobjects/admin.page.js";
import homePage from "../pageobjects/home.page.js";

Given(/^I am on the home page$/, async () => {
  assert.equal(await homePage.isDashboardHeaderExists(), true);
});

When(/^I click to the Admin menu link$/, async () => {
  await homePage.clickAdminMenu();
});

Then(/^I go to the admin page$/, async () => {
  assert.equal(await adminPage.isUserManagementLinkExists(), true);
});
