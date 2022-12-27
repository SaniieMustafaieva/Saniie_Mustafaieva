import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import adminPage from "../pageobjects/admin.page.js";
import userAddedPage from "../pageobjects/userAdded.page.js";
import usersgridPage from "../pageobjects/usersgrid.page.js";

Given(/^I am on the User Added page$/, async () => {
  assert.equal(await userAddedPage.isUserAddedExists(), true);
});

When(/^I select value in field (\w+)$/, async (userRole) => {
  await userAddedPage.select(userRole);
});

When(/^I enter value in EmployeeName field (.+)$/, async (employeeName) => {
  await userAddedPage.setEmployeename(employeeName);
});

When(/^I enter username in field (\w+)$/, async (userName) => {
  await userAddedPage.setUserName(userName);
});

// Then(/^I go to the User Grid page$/, async () => {
//   assert.equal(await usersgridPage.isUsersGridExists(), true);
// });
