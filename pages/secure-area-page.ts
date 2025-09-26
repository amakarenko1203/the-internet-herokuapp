import { Locator, Page, expect } from '@playwright/test'

export class SecureAreaPage {
    
    
    successMessage: Locator
    logoutButton: Locator

    constructor(page: Page) {
      
        this.successMessage = page.getByText('You logged into a secure area')

        this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }


    async validateSuccessMessage(): Promise<void> {
        await expect(this.successMessage).toContainText('You logged into a secure area')
    }
        async clickLogout(): Promise<void> {
        await this.logoutButton.click()
    }

}