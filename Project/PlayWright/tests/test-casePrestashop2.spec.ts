import { test, expect } from '@playwright/test';

//TC01 ปิดหน้าเพจเป็นภาษาไทย
test('TC01', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });