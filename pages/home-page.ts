import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  titleLocator: Locator
  dropdownLocator:Locator
  forgotPasswordLink: Locator
  clickCheckboxesLink: Locator
  formAuthenticationLink: Locator


  constructor(page: Page) {
    this.titleLocator = page.getByRole('heading', { name: 'Welcome to the-internet' })
    this.dropdownLocator = page.getByRole('link', { name: 'Dropdown' })
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' })
    this.clickCheckboxesLink = page.getByRole('link', { name: 'Checkboxes' })
    this.formAuthenticationLink = page.getByRole('link', { name: 'Form Authentication' })
  }


  async validateTitle(): Promise<void> {
    await expect(this.titleLocator).toHaveText('Welcome to the-internet')
  }

  async clickOnDropdownLink(): Promise<void>{
  await this.dropdownLocator.click()  
}
  async clickOnForgotPasswordLink(): Promise<void>{
    await this.forgotPasswordLink.click()

  }

  async clickOnCheckboxesLink(): Promise<void> {
    await this.clickCheckboxesLink.click()
  }
  async clickOnFormAuthenticationLink(): Promise<void> {
    await this.formAuthenticationLink.click()
  }
}
