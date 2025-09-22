import { test, expect } from '@playwright/test';

test('status becomes submitted', async ({ page }) => {
  // ...
  
  await page.goto("https://www.google.com");
  //await page.getByRole('button').click();
  //await expect(page.locator('.status')).toHaveText('Submitted');
});