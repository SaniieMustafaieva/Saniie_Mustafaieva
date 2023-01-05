import Page from "./page.js";
import { Key } from "webdriverio";

class UserAddedPage extends Page {
  public get userAdded() {
    return $(".orangehrm-card-container");
  }

  public get userRoleButton() {
    return $$(">>>div.oxd-select-text--after > i.oxd-select-text--arrow")[0];
  }

  public get selectUserRoleWrapperContainer() {
    return $$(">>>div.oxd-select-wrapper")[0];
  }

  public get employeeNameElement() {
    return $("div.oxd-autocomplete-text-input--active > input");
  }

  public get employeeNameOptionsContainer() {
    return $(">>>div.oxd-autocomplete-wrapper > div.oxd-autocomplete-dropdown");
  }

  public get employeeNameOptions() {
    return $(
      "div.oxd-autocomplete-wrapper > div.oxd-autocomplete-dropdown > div.oxd-autocomplete-option"
    );
  }

  public get usernameInAddForm() {
    return $$("div.oxd-input-field-bottom-space")[3].$("input");
  }

  public get passwordInAddForm() {
    return $$(">>>input[type=password]")[0];
  }

  public get confirmPasswordInAddForm() {
    return $$(">>>input[type=password]")[1];
  }

  public get statusButton() {
    return $$(">>>div.oxd-select-text--after > i.oxd-select-text--arrow")[1];
  }

  public get selectUserStatusContainer() {
    return $$(">>>div.oxd-select-wrapper")[1];
  }

  public get saveButton() {
    return $("button.oxd-button--secondary");
  }

  async isUserAddedExists() {
    return await this.userAdded.waitForExist();
  }

  async clickUserRoleButton() {
    await this.userRoleButton.click();
  }

  public async selectRole(userRole) {
    await this.clickUserRoleButton();
    const userRolecontainer = await this.selectUserRoleWrapperContainer;
    userRolecontainer.$("div.oxd-select-dropdown").waitForDisplayed();
    await userRolecontainer
      .$$("div.oxd-select-dropdown > div.oxd-select-option")[2]
      .click();
    // let options: ElementArrayType = await userRolecontainer.$$(
    //   "div.oxd-select-dropdown > div.oxd-select-option"
    // );
    // for (let index = 1; index < options.length; index++) {
    //   let option = options[index];
    //   let optionValue = await option.$("span").getText();
    //   if (optionValue === userRole) {
    //     await option.click();
    //   }
    // }
    await this.clickUserRoleButton();
  }

  async clickStatusButton() {
    await this.statusButton.click();
  }

  public async selectStatus(userStatus) {
    await this.clickStatusButton();
    const userStatusContainer = await this.selectUserStatusContainer;
    userStatusContainer.$("div.oxd-select-dropdown").waitForDisplayed();
    await userStatusContainer
      .$$("div.oxd-select-dropdown > div.oxd-select-option")[1]
      .click();
    // let options: ElementArrayType = await userStatusContainer.$$(
    //   "div.oxd-select-dropdown > div.oxd-select-option"
    // );

    // for (let index = 1; index < options.length; index++) {
    //   let option = options[index];
    //   let optionValue = await option.$("span").getText();
    //   if (optionValue === userStatus) {
    //     await option.click();
    //     console.log(
    //       "🚀 ~ file: userAdded.page.ts:93 ~ UserAddedPage ~ selectStatus ~ optionValue",
    //       optionValue
    //     );
    //   }
    // }
    await this.clickStatusButton();
  }

  public async setEmployeename(employeeName) {
    await this.employeeNameElement.waitForDisplayed();
    await this.employeeNameElement.setValue(employeeName);

    await browser.pause(3000);

    await $$(">>>div.oxd-autocomplete-option")[0].waitForDisplayed();
    await $$(">>>div.oxd-autocomplete-option")[0].click();
  }

  public async setUserName(userName) {
    await this.usernameInAddForm.waitForDisplayed();
    await this.usernameInAddForm.setValue(userName);
  }

  public async setPassWord(passWord) {
    await this.passwordInAddForm.waitForExist();
    await this.passwordInAddForm.setValue(passWord);
  }

  public async setConfirmPassWord(passWord) {
    await this.confirmPasswordInAddForm.waitForExist();
    await this.confirmPasswordInAddForm.setValue(passWord);
  }

  async clickSaveButton() {
    await browser.pause(1000);
    let saveButtonIsPresent = await this.saveButton.waitForClickable();
    if (saveButtonIsPresent) {
      await this.saveButton.click();
      await this.saveButton.waitForDisplayed({ reverse: true });
    }
  }
}
export default new UserAddedPage();
