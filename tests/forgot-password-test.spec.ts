import {test} from '@playwright/test'
import { ForgotPasswordClass } from '../pages/forgot-password-page'
import { HomePage } from '../pages/home-page'
import { ErrorMessagePage } from '../pages/error-message-page';


test('Internal Server Error Validation', async ({ page }) => {
    let homePage = new HomePage(page)
    let errorMessagePage = new ErrorMessagePage(page)
    let forgotPage = new ForgotPasswordClass(page)


    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickOnForgotPasswordLink()
    await forgotPage.enterEmail('annamaka@gmail.com')
    await forgotPage.clickResetButton()
    await errorMessagePage.validateErrorMessage()

})