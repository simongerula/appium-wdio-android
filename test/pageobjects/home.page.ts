class HomePage{

    // LOCATORS
    public btnLogin (page: string) {
        return $(`//android.widget.Button[@content-desc="${page}"]`)
    }
    
    // ACTIONS

    public async goToPage (page: string) {
        driver.setImplicitTimeout(20000)
        await this.btnLogin(page).click();
    }

}

export default new HomePage();
