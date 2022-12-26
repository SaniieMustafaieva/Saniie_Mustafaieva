import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class LoginPage extends Page {

    public get inputUsername () {
        return $('input[name="username"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        return await super.open('/auth/login');
    }
}

export default new LoginPage();