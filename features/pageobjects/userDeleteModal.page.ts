import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.js";

class UserDeleteModalPage extends Page {
  public get btnDelete() {
    return $("button.oxd-button--label-danger");
  }

  public async clickDelete() {
    await this.btnDelete.waitForDisplayed();
    await this.btnDelete.click();
    await browser.pause(3000);
    await $("div.oxd-dialog-sheet").waitForDisplayed({ reverse: false });
  }
}

export default new UserDeleteModalPage();
