import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CheckboxesPage } from '../pages/checkboxes-page'


test('Checkboxes validation', async ({ page }) => {
    let homePage = new HomePage(page)
    let checkboxesPage = new CheckboxesPage(page)


    await page.goto('https://the-internet.herokuapp.com/')

    await homePage.clickOnCheckboxesLink()
    await checkboxesPage.checkTheCheckboxes()
    await checkboxesPage.checkCheckbox1()
    await checkboxesPage.assureBothChecked()

})