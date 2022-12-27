import Page from "./page.js";

class UserAddedPage extends Page {
  public get userAdded() {
    return $(".orangehrm-card-container");
  }
  public get userRoleButton() {
    return $(">>>div.oxd-select-text--after > i.oxd-select-text--arrow");
  }

  public get selectUserRoleContainer() {
    return $(">>>div.oxd-select-wrapper > div.oxd-select-dropdown");
  }

  public get selectUserRole() {
    return $(">>>.oxd-select-text-input");
  }

  public get employeeNameElement() {
    return $(">>>div.oxd-autocomplete-text-input > input");
  }
  public get usernameInAddForm() {
    return $("div.oxd-grid-item oxd-grid-item--gutters > input");
  }
  async isUserAddedExists() {
    return await this.userAdded.waitForExist();
  }

  async clickUserRoleButton() {
    await this.userRoleButton.click();
  }

  public async select(userRole) {
    await this.clickUserRoleButton();
    (await this.selectUserRoleContainer).waitForExist().then(() => {
      this.selectUserRole.addValue(userRole)
    });
  }

  public async setEmployeename(employeeName) {
    (await this.employeeNameElement).waitForExist();
    (await this.employeeNameElement).setValue(employeeName);
  }

  public async setUserName(userName) {
    (await this.usernameInAddForm).waitForExist().then(() => {
      this.usernameInAddForm.setValue(userName);
    });
  }
}
export default new UserAddedPage();
