import { Locator, Page, expect } from '@playwright/test'

export class DropdownPage {
  dropdownLocator: Locator

  constructor(page: Page) {

    this.dropdownLocator = page.locator('#dropdown')
  }

  async selectOption(optionText: string): Promise<void> {
    await this.dropdownLocator.selectOption(optionText)
  }

  async validateSelectedOption(selectOptionText: string): Promise<void>{
    await expect(this.dropdownLocator).toHaveValue(selectOptionText)
  }

}