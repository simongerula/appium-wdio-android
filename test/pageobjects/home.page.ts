class HomePage{

    // LOCATORS
    public btnLogin (page: string) {
        return $(`~${page}`)
    }
    
    // ACTIONS

    public async goToPage (page: string) {
        await this.btnLogin(page).click();
    }

}

export default new HomePage();
