class LoginPage{
    /**
     * define selectors using getter methods
     */

    public get inputUsername () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    public get msgSuccessLogin () {
        return $('id=android:id/message');
    }

    public get btnOk () {
        return $('id=android:id/button1');
    }

    
    // a method to encapsule automation code to interact with the page
    // e.g. to login using username and password
    
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async closeAlert() {
        await this.btnOk.click();
    }

}

export default new LoginPage();
