import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import adminPage from "../pageobjects/admin.page.js";
import userAddedPage from "../pageobjects/userAdded.page.js";
import usersgridPage from "../pageobjects/usersgrid.page.js";

Given(/^I am on the Users Grid page$/, async () => {
  assert.equal(await usersgridPage.isUsersGridExists(), true);
});

When(/^I click on "Add" button$/, async () => {
  await usersgridPage.clickAddUserButton();
});

Then(/^I go to the User Added page$/, async () => {
  assert.equal(await userAddedPage.isUserAddedExists(), true);
});
