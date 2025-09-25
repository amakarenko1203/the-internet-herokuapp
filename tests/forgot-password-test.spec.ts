import {test} from '@playwright/test'
import { ForgotPasswordClass } from '../pages/forgot-password-page'
import { HomePage } from '../pages/home-page'


test('Internal Server Error Validation', async ({ page }) => {

	let forgotPassword = new ForgotPasswordPage(page)

});