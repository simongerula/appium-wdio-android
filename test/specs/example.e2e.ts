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

    it.only('should swipe the cards', async () => {

        await HomePage.goToPage('Swipe')
        await SwipePage.isDisplayed()
        .then(isDisplayed => {
            expect(isDisplayed).toEqual(false)
        })
        await SwipePage.swipeRight()
        await driver.saveScreenshot('./screenshots/scrolled.png')
        await SwipePage.isDisplayed()
        .then(isDisplayed => {
            expect(isDisplayed).toEqual(true)
        })

    })

    it('should change screen orientation and take a screenshoot', async () => {
        
        await driver.setOrientation('LANDSCAPE')
        await driver.pause(2500)
        await driver.saveScreenshot('./screenshots/landscape.png')
        await driver.getOrientation()
        .then(orientation => {
            expect(orientation).toEqual('LANDSCAPE')
        })

    })

})


