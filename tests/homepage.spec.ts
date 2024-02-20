import { test, expect } from "@playwright/test";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";

test.describe("homepage tests", () => {
  let homePage: HomePage;
  let propertiesPage: PropertiesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test("selected filter carries over to properties page", async ({ page }) => {
    propertiesPage = new PropertiesPage(page);
    await homePage.propertyTypeField.first().click();
    await homePage.roomCheckbox.first().click();
    await homePage.searchBtn.first().click();
    await propertiesPage.propertyTypeFilter.first().click();
    await expect(propertiesPage.roomCheckbox).toBeChecked();
  });
});
