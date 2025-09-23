import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  titleLocator: Locator

  constructor(page: Page) {
    this.titleLocator = page.locator('h1[class="heading"]')
  }

  async goto(page: Page) {
    await page.goto('https://the-internet.herokuapp.com/')
  }

  async validateTitle() {
    await expect(this.titleLocator).toHaveText('Welcome to the-internet')
  }
}
