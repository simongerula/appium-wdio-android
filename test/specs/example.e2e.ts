import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'
import SwipePage from '../pageobjects/swipe.page.js'
import data from '../../data/data.js'

describe('My Login application', () => {

    it('should login and find success message', async () => {

        await HomePage.goToPage(data.LoginData.page)
        await LoginPage.login(data.LoginData.username, data.LoginData.password)
        await expect(LoginPage.msgSuccessLogin).toHaveText(data.LoginData.successText)
        await LoginPage.closeAlert()

    })

    it('should swipe the cards', async () => {

        await HomePage.goToPage(data.SwipeData.page)
        await SwipePage.isDisplayed()
        .then(isDisplayed => {
            expect(isDisplayed).toEqual(false)
        })
        await SwipePage.swipeRight()
        await driver.saveScreenshot(data.SwipeData.pathScreenshot)
        await SwipePage.isDisplayed()
        .then(isDisplayed => {
            expect(isDisplayed).toEqual(true)
        })

    })

    it('should change screen orientation and take a screenshoot', async () => {
        
        await driver.setOrientation(data.OrientationData.orientation)
        await driver.pause(2500)
        await driver.saveScreenshot(data.OrientationData.pathScreenshot)
        await driver.getOrientation()
        .then(orientation => {
            expect(orientation).toEqual(data.OrientationData.orientation)
        })

    })

})


