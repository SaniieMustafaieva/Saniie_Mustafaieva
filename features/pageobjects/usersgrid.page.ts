import Page from "./page.js";

class UsersGridPage extends Page {
  public get userGrid() {
    return $(".orangehrm-container");
  }
  public get addUserButton() {
    return $("div.orangehrm-header-container > button.oxd-button");
  }

  async isUsersGridExists() {
    return await this.userGrid.waitForExist();
  }

  async clickAddUserButton() {
    await this.addUserButton.click();
  }

}

export default new UsersGridPage();
