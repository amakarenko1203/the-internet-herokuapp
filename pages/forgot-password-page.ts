import { Locator, expect, Page } from '@playwright/test'

export class ForgotPasswordClass {
    titleLocator: Locator
    emailField: Locator
    retreivePassButton: Locator
    errorMessage: Locator


    constructor(page: Page) {
        this.titleLocator = page.getByRole('heading', { name: 'Forgot Password' })
        this.emailField = page.getByRole('textbox', { name: 'E-mail' })
        this.retreivePassButton = page.getByRole('button', { name: 'Retrieve password' })
        this.errorMessage = page.getByRole('heading', { name: 'Internal Server Error' })
    }
    async goto(page: Page): Promise<void> {
        await page.goto('https://the-internet.herokuapp.com/forgot_password')
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
    async validateInternalServerError(): Promise<void> {

        await expect(this.errorMessage).toHaveText('Internal Server Error')

    }
}