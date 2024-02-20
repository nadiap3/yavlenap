import type { Page, Locator } from "@playwright/test";

export default class PropertiesPage {
  readonly page: Page;
  readonly mapBox: Locator;
  readonly mapBtn: Locator;
  readonly listBtn: Locator;
  readonly nearMeBtn: Locator;
  readonly listResults: Locator;
  readonly propertyListItem: Locator;
  readonly propertyListHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mapBox = page.locator(".mapboxgl-map");
    this.mapBtn = page.locator(
      '.cards-search-nav .view-mode [data-option="results-map"]'
    );
    this.listBtn = page.locator(
      '.cards-search-nav .view-mode [data-option="results-list"]'
    );
    this.nearMeBtn = page.locator(".draw-on-map-option");
    this.listResults = page.locator(".list-results-list");
    this.propertyListItem = page.locator(".card-list-item");
    this.propertyListHeader = page.locator(".list-header");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/properties/all");
  }
}
