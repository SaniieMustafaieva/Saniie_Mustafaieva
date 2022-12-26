import Page from "./page.js";

class HomePage extends Page {
  public get dashboardHeader() {
    return $("header.oxd-topbar");
  }
  public get adminMenuItem() {
    return $('a[href="/web/index.php/admin/viewAdminModule"]');
  }

  async isDashboardHeaderExists() {
    return await this.dashboardHeader.waitForExist();
  }

  async clickAdminMenu() {
    await this.adminMenuItem.click();
  }
}

export default new HomePage();
