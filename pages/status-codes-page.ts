import { expect, Locator, Page } from '@playwright/test'
export class StatusCodePage {

    titleLocator: Locator
    statusCode200Link: Locator
    statusCode301Link: Locator
    statusCode404Link: Locator
    statusCode500Link: Locator
    backLink: Locator

    constructor(page: Page) {
        this.titleLocator = page.getByRole('heading', { name: 'Status Codes' })
        this.statusCode200Link = page.getByRole('link', { name: '200' })
        this.statusCode301Link = page.getByRole('link', { name: '301' })
        this.statusCode404Link = page.getByRole('link', { name: '404' })
        this.statusCode500Link = page.getByRole('link', { name: '500' })
        this.backLink = page.getByRole('link', { name: 'here' })
    }
    async goto(page: Page): Promise<void> {
        await page.goto('https://the-internet.herokuapp.com/status_codes')
    }

    async validatePageTitle(page: Page): Promise<void> {
        await expect(this.titleLocator).toHaveText('Status Codes')
    }
    async click200Link(): Promise<void> {
        await this.statusCode200Link.click()
    }
    async click301Link(): Promise<void> {
        await this.statusCode301Link.click()
    }
    async click404Link(): Promise<void> {
        await this.statusCode404Link.click()
    }
    async click500Link(): Promise<void> {
        await this.statusCode500Link.click()
    }
    async clickBackLink(): Promise<void> {
        await this.backLink.click()
    }
    async testAllStatusCodes(page: Page): Promise<void> {

        await this.click200Link()
        await expect(page.getByText('200')).toBeVisible()
        await this.clickBackLink()


        await this.click301Link()
        await expect(page.getByText('301')).toBeVisible()
        await this.clickBackLink()


        await this.click404Link()
        await expect(page.getByText('404')).toBeVisible()
        await this.clickBackLink()


        await this.click500Link()
        await expect(page.getByText('500')).toBeVisible()
        await this.clickBackLink()
    }
}