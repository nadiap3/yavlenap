import { test, expect } from "@playwright/test";
//add in url check?
test("view in map mode", async ({ page }) => {
  await page.goto("https://www.yavlena.com/properties/all", {
    waitUntil: "load",
  });
  //select map option
  await page
    .locator('.cards-search-nav .view-mode [data-option="results-map"]')
    .first()
    .click();
  //verify map is visible
  await expect(page.locator(".mapboxgl-map")).toBeVisible();
  await expect(
    page
      .locator('.cards-search-nav .view-mode [data-option="results-map"]')
      .first()
  ).toHaveClass("active");
  await expect(page.locator(".near-me-icon")).toBeVisible();
  // verify list option button is there still
  await expect(
    page
      .locator('.cards-search-nav .view-mode [data-option="results-list"]')
      .first()
  ).toBeVisible();
});
//add in url check?
test("view in list mode", async ({ page }) => {
  await page.goto("https://www.yavlena.com/properties/all", {
    waitUntil: "load",
  });
  //select list view
  await page
    .locator('.cards-search-nav .view-mode [data-option="results-list"]')
    .first()
    .click();
  await page.waitForTimeout(9000); //site loads slowly
  //verify list is visible
  await expect(page.locator(".list-results-list").first()).toBeVisible();
  await expect(page.locator(".card-list-item").first()).toBeVisible();
  await expect(page.locator(".list-header")).toBeVisible();
  // verify map option button is there still
  await expect(
    page
      .locator('.cards-search-nav .view-mode [data-option="results-map"]')
      .first()
  ).toBeVisible();
});

test("filters", async ({ page }) => {
  await page.goto("https://www.yavlena.com/properties/all", {
    waitUntil: "load",
  });
  //select some filters
  //verify they are reflected in the url
});
