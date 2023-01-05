import Page from "./page.js";

class UsersGridPage extends Page {
  public get userGrid() {
    return $("div.orangehrm-container");
  }
  public get addUserButton() {
    return $("div.orangehrm-header-container > button.oxd-button");
  }
  public get findUserInGrid() {
    return $$("div.card-body-slot > div.data");
  }
  async isUsersGridExists() {
    return await this.userGrid.waitForExist();
  }

  async clickAddUserButton() {
    await this.addUserButton.click();
  }

  public async isUserCreated(userName) {
    let users = await this.findUserInGrid;
    console.log(users);
  }
}

export default new UsersGridPage();
