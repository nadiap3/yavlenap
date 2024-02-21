import type { Page, Locator } from "@playwright/test";
import {
  assertElementIsNotVisible,
  assertElementIsVisible,
  convertPricesToNumbers,
} from "../utils";

export default class PropertiesPage {
  readonly page: Page;
  readonly mapBox: Locator;
  readonly mapBtn: Locator;
  readonly listBtn: Locator;
  readonly nearMeBtn: Locator;
  readonly listResults: Locator;
  readonly propertyListItem: Locator;
  readonly propertyListHeader: Locator;
  readonly propertyTypeFilter: Locator;
  readonly roomCheckbox: Locator;
  readonly resultsHolder: Locator;
  readonly sortByField: Locator;
  readonly priceDescending: Locator;
  readonly loadingIcon: Locator;

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
    this.propertyTypeFilter = page.locator('[placeholder="Тип имот"]');
    this.roomCheckbox = page.locator('div [value="Room"] ~ ins');
    this.resultsHolder = page.locator(".search-results-map-holder");
    this.sortByField = page
      .getByRole("complementary")
      .locator("span")
      .filter({ hasText: "Най-нови (отгоре)" });
    this.priceDescending = page.getByRole("complementary").getByText("Цена ▼");
    this.loadingIcon = page.locator(".results-loading");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/properties/all");
  }

  async extractAllPropertyPrices() {
    const cardsArr = await this.resultsHolder.locator(".card-search").all();
    const allPricesNumbers: number[] = await Promise.all(
      cardsArr.map(async (el) => {
        const price = await el.locator(".price-label").innerText();

        return convertPricesToNumbers(price);
      })
    );
    return allPricesNumbers;
  }

  async waitForResults() {
    await assertElementIsVisible(this.loadingIcon.first());
    await assertElementIsNotVisible(this.loadingIcon.first());
  }
}
