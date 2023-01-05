import { Given, When, Then } from "@wdio/cucumber-framework";
import * as assert from "assert";
import userAddedPage from "../pageobjects/userAdded.page.js";
import userDeleteModalPage from "../pageobjects/userDeleteModal.page.js";
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

Then(/^created user is present (\w+)$/, async (userName) => {
  assert.equal(await usersgridPage.isUserCreated(userName), true);
});

When(/^I press Edit button for user (\w+)$/, async (userName) => {
  await usersgridPage.clickEditUserButton(userName);
});

When(/^I press Cancel button$/, async () => {
  await userAddedPage.pressCancelButton();
});

When(/^I press Delete button for user (\w+)$/, async (userName) => {
  await usersgridPage.clickDeleteUserButton(userName);
});

When(/^in the modal window I press "Yes,delete" button$/, async () => {
  await userDeleteModalPage.clickDelete();
});

Then(/^there is no user with name (\w+)$/, async (userName) => {
  assert.equal(await usersgridPage.isUserCreated(userName), false);
});
