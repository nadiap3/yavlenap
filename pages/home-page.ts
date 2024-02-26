import type { Page, Locator } from "@playwright/test";

export default class HomePage {
  readonly page: Page;
  readonly propertyTypeField: Locator;
  readonly propertyTypeFirstOption: Locator;
  readonly propertyTypeThirdOption: Locator;
  readonly searchBtn: Locator;
  readonly chooseLanguageBtn: Locator;
  readonly dropdownOptionEn: Locator;
  readonly dropdownOptionRu: Locator;
  readonly aroundMeBtn: Locator;
  readonly searchFor: Locator;
  readonly generalSearchBox: Locator;
  readonly dropdownOptionBuy: Locator;
  readonly dropdownOptionRent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.propertyTypeField = page.locator(
      ".search-dropdown:first-child .search-area"
    );
    this.propertyTypeFirstOption = page.locator(".sub-category :first-child");
    this.propertyTypeThirdOption = page.locator(".sub-category :nth-child(3)");
    this.searchBtn = page.locator('[data-search-field="new-search"]');
    this.chooseLanguageBtn = page.locator(".dropdown-label");
    this.dropdownOptionEn = page.locator('[data-lang="en"]');
    this.dropdownOptionRu = page.locator('[data-lang="ru"]');
    this.aroundMeBtn = page.locator(".map-search ");
    this.searchFor = page.locator('[placeholder*= "/"]');
    this.generalSearchBox = page.locator("#searchBox");
    this.dropdownOptionBuy = page.locator(".buy-label .icheckbox_flat-green");
    this.dropdownOptionRent = page.locator(".rent-label .icheckbox_flat-green");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/");
  }

  async waitForLanguageLoaded() {
    await this.page.locator("pace-active").isVisible();
    await this.page.locator("pace-inactive").isVisible();
  }
}
