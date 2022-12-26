import Page from "./page.js";

class AdminPage extends Page {
  public get userManagementLink() {
    return $('.oxd-topbar-body-nav-tab-item');
  }
  public get usersLink() {
    return $('a[href="#"]');
  }

  async clickUserManagement() {
    await this.userManagementLink.click()
  }
  
  async clickUsersLink() {
    await this.usersLink.click()
  }

  async isUserManagementLinkExists() {
    return await this.userManagementLink.waitForExist();
  }
}

export default new AdminPage();
