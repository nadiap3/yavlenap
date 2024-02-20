import type { Page, Locator } from "@playwright/test";

export default class HomePage {
  readonly page: Page;
  readonly propertyTypeField: Locator;
  readonly roomCheckbox: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.propertyTypeField = page.locator(
      ".search-dropdown:first-child .search-area"
    );
    this.roomCheckbox = page.locator('div [value="Room"] ~ ins');
    this.searchBtn = page.locator('[data-search-field="new-search"]');
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/");
  }
}
