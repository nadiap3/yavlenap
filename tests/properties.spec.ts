import { test, expect } from "@playwright/test";
import PropertiesPage from "../pages/properties-page";
import { assertElementIsVisible } from "../utils/index";

test.describe("properties page tests", () => {
  let propertiesPage: PropertiesPage;

  test.beforeEach(async ({ page }) => {
    propertiesPage = new PropertiesPage(page);
    await propertiesPage.goto();
  });

  test("view in map mode", async () => {
    await propertiesPage.mapBtn.first().click();
    await assertElementIsVisible(propertiesPage.mapBox);
    await expect(propertiesPage.mapBtn.first()).toHaveClass("active");
    await assertElementIsVisible(propertiesPage.nearMeBtn);
    await assertElementIsVisible(propertiesPage.listBtn.first());
  });

  test("view in list mode", async ({ page }) => {
    await propertiesPage.listBtn.first().click();
    //TODO: get around this timeout (site loads slowly - adjust settings for waits in config possibly)
    await page.waitForTimeout(9000);
    await assertElementIsVisible(propertiesPage.listResults.first());
    await assertElementIsVisible(propertiesPage.propertyListItem.first());
    await assertElementIsVisible(propertiesPage.propertyListHeader);
    await assertElementIsVisible(propertiesPage.mapBtn.first());
  });
});
