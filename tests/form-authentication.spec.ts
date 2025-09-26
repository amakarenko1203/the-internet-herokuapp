import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { FormAuthLoginPage } from '../pages/form-auth-login-page'
import { SecureAreaPage } from '../pages/secure-area-page'

test.beforeEach(async ({ page }) => {
 
  await page.goto('https://the-internet.herokuapp.com/')
})

test('Form Authentication - Valid Login', async ({ page }) => {
  let homePage = new HomePage(page)
  let formAuthLoginPage = new FormAuthLoginPage(page)
  let secureAreaPage = new SecureAreaPage(page)
  
})

test('Form Authentication Happy Path', async ({ page }) => {
  let homePage = new HomePage(page)
  let formAuthLoginPage = new FormAuthLoginPage(page)
  let secureAreaPage = new SecureAreaPage(page)

  await homePage.clickOnFormAuthenticationLink()

  await formAuthLoginPage.enterLogin('tomsmith')
  await formAuthLoginPage.enterPassword('SuperSecretPassword!')
  await formAuthLoginPage.clickLogin()

  await secureAreaPage.validateSuccessMessage()
  await secureAreaPage.clickLogout()
    await formAuthLoginPage.validateLogoutMessage()
})