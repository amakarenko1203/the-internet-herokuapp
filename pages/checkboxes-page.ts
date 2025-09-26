import { Page, Locator, expect } from '@playwright/test'

export class CheckboxesPage{

    checkbox1: Locator
    checkbox2: Locator

    constructor(page: Page) {
        this.checkbox1 = page.getByRole('checkbox').nth(0)
        this.checkbox2 = page.getByRole('checkbox').nth(1)
    }
    async checkTheCheckboxes(): Promise<void> {
        await expect(this.checkbox1).not.toBeChecked()
        await expect(this.checkbox2).toBeChecked()
    }

    async checkCheckbox1(): Promise<void> {
        await this.checkbox1.check()
    }
    async assureBothChecked() {
        await expect(this.checkbox1).toBeChecked()
        await expect(this.checkbox2).toBeChecked()
    }
    }
