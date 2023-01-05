import Page from "./page.js";

class UsersGridPage extends Page {
  public get userGrid() {
    return $("div.orangehrm-container");
  }
  public get addUserButton() {
    return $("div.orangehrm-header-container > button.oxd-button");
  }
  public get findUserInGrid() {
    return $$("div.card-center");
  }
  async isUsersGridExists() {
    return await this.userGrid.waitForExist();
  }

  async clickAddUserButton() {
    await this.addUserButton.click();
  }

  public async isUserCreated(userName) {
    await this.userGrid.waitForDisplayed();
    return await $(">>>div.orangehrm-container")
      .$(`div=${userName}`)
      .isDisplayed();
  }

  public async clickEditUserButton(userName: string) {
    await this.userGrid.waitForDisplayed();
    const userNameEl = await $(">>>div.orangehrm-container").$(
      `div=${userName}`
    );
    userNameEl
      .$("..")
      .$("..")
      .$("..")
      .$("..")
      .$$("button.oxd-table-cell-action-space")[1]
      .click();

    await $("div.orangehrm-card-container").waitForDisplayed();
  }

  public async clickDeleteUserButton(userName: string) {
    await this.userGrid.waitForDisplayed();
    const userNameEl = await $(">>>div.orangehrm-container").$(
      `div=${userName}`
    );
    userNameEl
      .$("..")
      .$("..")
      .$("..")
      .$("..")
      .$$("button.oxd-table-cell-action-space")[0]
      .click();

    await $("div.orangehrm-modal-header").waitForDisplayed();
  }
}

export default new UsersGridPage();
