import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import adminPage from "../pageobjects/admin.page.js";
import userAddedPage from "../pageobjects/userAdded.page.js";
import usersgridPage from "../pageobjects/usersgrid.page.js";

Given(/^I am on the User Added page$/, async () => {
  assert.equal(await userAddedPage.isUserAddedExists(), true);
});

When(/^I select value in field Role (\w+)$/, async (userRole) => {
  await userAddedPage.selectRole(userRole);
});

When(/^I enter value in EmployeeName field (.+)$/, async (employeeName) => {
  await userAddedPage.setEmployeename(employeeName);
});

When(/^I select value in field Status (\w+)$/, async (userStatus) => {
  await userAddedPage.selectStatus(userStatus);
});

When(/^I enter username in field (\w+)$/, async (userName) => {
  await userAddedPage.setUserName(userName);
});

When(/^I enter password in field (.+)$/, async (passWord) => {
  await userAddedPage.setPassWord(passWord);
  await userAddedPage.setConfirmPassWord(passWord);
});

When(/^I press Save button$/, async () => {
  await userAddedPage.clickSaveButton();
});
