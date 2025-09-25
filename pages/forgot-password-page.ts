import { Locator, expect, Page } from '@playwright/test'


export class ForgotPasswordClass {
    titleLocator: Locator
    emailField: Locator
    retreivePassButton: Locator
   


    constructor(page: Page) {
        this.titleLocator = page.getByRole('heading', { name: 'Forgot Password' })
        this.emailField = page.getByRole('textbox', { name: 'E-mail' })
        this.retreivePassButton = page.getByRole('button', { name: 'Retrieve password' })
    
    }
    
    async validatePageTitle(): Promise<void> {
        await expect(this.titleLocator).toHaveText('Forgot Password')
    }
    async enterEmail(email: string): Promise<void> {
        await this.emailField.fill(email)
    }

    async clickResetButton(): Promise<void> {
        await this.retreivePassButton.click()
    }
   
}