import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  titleLocator: Locator
  dropdownLocator:Locator
  

  constructor(page: Page) {
    this.titleLocator = page.getByRole('heading', { name: 'Welcome to the-internet' })
    this.dropdownLocator = page.getByRole('link', { name: 'Dropdown' })
  }


  async validateTitle(): Promise<void> {
    await expect(this.titleLocator).toHaveText('Welcome to the-internet')
  }

  async clickOnDropdownLink(): Promise<void>{
  await this.dropdownLocator.click()  
}

}
