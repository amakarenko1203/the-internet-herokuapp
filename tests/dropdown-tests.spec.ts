import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { DropdownPage } from '../pages/dropdown-page'

test('Dropdown option 1 selection validation', async ({ page }) => {
  let homePage = new HomePage(page)
  let dropdownPage = new DropdownPage(page)

  await page.goto('https://the-internet.herokuapp.com/')
  

  await homePage.clickOnDropdownLink()  
  
  await dropdownPage.selectOption('Option 1')

  await dropdownPage.validateSelectedOption('Option 1')   
})

test('Dropdown option 2 selection validation', async ({ page }) => {
  let homePage = new HomePage(page)
  let dropdownPage = new DropdownPage(page)

  await page.goto('/')
  
  await homePage.clickOnDropdownLink()  
  
  await dropdownPage.selectOption('Option 2')

  await dropdownPage.validateSelectedOption('Option 2')   
})