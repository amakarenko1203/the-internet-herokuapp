import { Locator, Page, expect } from '@playwright/test'

export class ErrorMessagePage {
    messageLocator: Locator;

    constructor(page: Page) {
        this.messageLocator = page.getByRole('heading', { name: 'Internal Server Error' })
    }
    async validateErrorMessage(): Promise<void> {
        await expect(this.messageLocator).toHaveText('Internal Server Error')
    }
}
