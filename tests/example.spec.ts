import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test('welcome page has welcome text', async ({ page }) => {
  await page.goto('/');
  
  // Expect the page to contain welcome text
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});