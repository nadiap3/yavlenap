import { test, expect } from "@playwright/test";
import PropertiesPage from "../pages/properties-page";

test.describe("properties page tests", () => {
  let propertiesPage: PropertiesPage;

  test.beforeEach(async ({ page }) => {
    propertiesPage = new PropertiesPage(page);
    await propertiesPage.goto();
  });

  test("view in map mode", async () => {
    await propertiesPage.mapBtn.first().click();
    await expect(propertiesPage.mapBox).toBeVisible();
    await expect(propertiesPage.mapBtn.first()).toHaveClass("active");
    await expect(propertiesPage.nearMeBtn).toBeVisible();
    await expect(propertiesPage.listBtn.first()).toBeVisible();
  });

  test("view in list mode", async ({ page }) => {
    await propertiesPage.listBtn.first().click();
    //TODO: get around this timeout (site loads slowly - adjust settings for waits in config possibly)
    await page.waitForTimeout(9000);
    await expect(propertiesPage.listResults.first()).toBeVisible();
    await expect(propertiesPage.propertyListItem.first()).toBeVisible();
    await expect(propertiesPage.propertyListHeader).toBeVisible();
    await expect(propertiesPage.mapBtn.first()).toBeVisible();
  });
});
