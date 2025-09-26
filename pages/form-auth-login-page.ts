import { Locator, Page, expect } from '@playwright/test'
export class FormAuthLoginPage {

    loginField: Locator
    passwordField: Locator
    loginButton: Locator
    successfulLogoutMessage: Locator

    constructor(page: Page) {
        this.loginField = page.getByRole('textbox', { name: 'Username' })
        this.passwordField = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.successfulLogoutMessage = page.getByText('You logged out of the secure area!') 
    }

    async enterLogin(login: string): Promise<void> {
        await this.loginField.fill(login)
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordField.fill(password)
    }

    async clickLogin(): Promise<void> {
        await this.loginButton.click()
    }
    async validateLogoutMessage(): Promise<void> {
        await expect(this.successfulLogoutMessage).toContainText('You logged out of the secure area!')
    }

}