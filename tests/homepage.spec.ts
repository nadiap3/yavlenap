import { test, expect } from "@playwright/test";

test("selected filter carries over to properties page", async ({ page }) => {
  await page.goto("https://www.yavlena.com/", {
    waitUntil: "load",
  });
  //click filter dropdown
  await page
    .locator(".search-dropdown:first-child .search-area")
    .first()
    .click();
  //click checkbox room
  await page.locator('div [value="Room"] ~ ins').first().click();
  //click search
  await page.locator('[data-search-field="new-search"]').first().click();
  await page.locator('[placeholder="Тип имот"]').first().click();
  await expect(page.locator('div [value="Room"] ~ ins')).toBeChecked();

  // add url check - query param
});
