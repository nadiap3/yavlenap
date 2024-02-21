import type { Page, Locator } from "@playwright/test";

export default class HomePage {
  readonly page: Page;
  readonly propertyTypeField: Locator;
  readonly roomCheckbox: Locator;
  readonly searchBtn: Locator;
  readonly chooseLanguageBtn: Locator;
  readonly dropdownOptionEn: Locator;
  readonly dropdownOptionRu: Locator;
  readonly aroundMeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.propertyTypeField = page.locator(
      ".search-dropdown:first-child .search-area"
    );
    this.roomCheckbox = page.locator('div [value="Room"] ~ ins');
    this.searchBtn = page.locator('[data-search-field="new-search"]');
    this.chooseLanguageBtn = page.locator(".dropdown-label");
    this.dropdownOptionEn = page.locator('[data-lang="en"]');
    this.dropdownOptionRu = page.locator('[data-lang="ru"]');
    this.aroundMeBtn = page.locator(".map-search ");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/");
  }

  async waitForLanguageLoaded() {
    await this.page.locator("pace-active").isVisible();
    await this.page.locator("pace-inactive").isVisible();
  }
}
