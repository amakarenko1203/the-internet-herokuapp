import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'


  test('Validate Home Page title is displayed', async ({ page }) => {
    let homePage = new HomePage(page)

    await homePage.goto(page)
    await homePage.validateTitle()
  })

