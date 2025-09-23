import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  titleLocator: Locator

  constructor(page: Page) {
    this.titleLocator = page.getByRole('heading', { name: 'Welcome to the-internet' })
  }

  async validateTitle(): Promise<void> {
    await expect(this.titleLocator).toHaveText('Welcome to the-internet')
  }
}
