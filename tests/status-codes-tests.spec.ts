import { test } from '@playwright/test'
import { StatusCodePage } from '../pages/status-codes-page'

test('User navigates to Status Codes page and tests all HTTP status codes', async ({ page }) => {
        let statusCodePage = new StatusCodePage(page)

        await page.goto(' https://the-internet.herokuapp.com/status_codes')
        
}

    
    