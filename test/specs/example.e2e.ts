import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'
import SwipePage from '../pageobjects/swipe.page.js'

describe('My Login application', () => {

    it('should login and find success message', async () => {

        await HomePage.goToPage('Login')
        await LoginPage.login('testmail@mail.com', 'SuperSecretPassword!')
        await expect(LoginPage.msgSuccessLogin).toHaveText('You are logged in!')
        await LoginPage.closeAlert()

    })

    it('should scroll', async () => {

        await HomePage.goToPage('Swipe')
        await SwipePage.scrollDown()

    })

    it('should change screen orientation and take a screenshoot', () => {
        
        driver.getOrientation()
        driver.setOrientation('LANDSCAPE')
        driver.saveScreenshot('./screenshots/landscape.png')
        expect(driver.getOrientation()).toHaveText('LANDSCAPE')
        
    })

})


