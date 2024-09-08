import { test, expect } from '@playwright/test';
import {testConst } from '@angular-monorepo/test-lib';

test('has title', async ({ page }) => {
  console.log(testConst)


  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
