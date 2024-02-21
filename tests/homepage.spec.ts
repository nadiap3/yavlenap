import { test, expect } from "@playwright/test";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";
import {
  BG_AROUND_ME_TEXT,
  EN_AROUND_ME_TEXT,
  RU_AROUND_ME_TEXT,
} from "../constants";

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

  test("switch language to English", async ({ page }) => {
    expect(await homePage.aroundMeBtn.textContent()).toContain(
      BG_AROUND_ME_TEXT
    );
    await homePage.chooseLanguageBtn.click();
    await homePage.dropdownOptionEn.click();
    await homePage.waitForLanguageLoaded();
    expect(await homePage.aroundMeBtn.textContent()).toContain(
      EN_AROUND_ME_TEXT
    );
    await expect(page).toHaveURL(/.*en/);
  });

  test("switch language to Russian", async ({ page }) => {
    expect(await homePage.aroundMeBtn.textContent()).toContain(
      BG_AROUND_ME_TEXT
    );
    await homePage.chooseLanguageBtn.click();
    await homePage.dropdownOptionRu.click();
    await homePage.waitForLanguageLoaded();
    expect(await homePage.aroundMeBtn.textContent()).toContain(
      RU_AROUND_ME_TEXT
    );
    await expect(page).toHaveURL(/.*ru/);
  });
});
