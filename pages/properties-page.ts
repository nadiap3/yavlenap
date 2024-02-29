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
  readonly priceFilter: Locator;
  readonly propertyMinPrice: Locator;
  readonly propNoMinOption: Locator;
  readonly propertyMaxPrice: Locator;
  readonly propMaxOption4: Locator;
  readonly cardSearchPropResult: Locator;
  readonly propertyModal: Locator;
  readonly btnConnectWithBroker: Locator;
  readonly btnConnectBrokerSubmit: Locator;
  readonly brokerMessageModal: Locator;
  readonly btnSendBrokerMessage: Locator;

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
    this.propertyTypeFilter = page.locator(
      '[data-search-field="property-type"]'
    );
    this.roomCheckbox = page.locator('div [value="Room"] ~ ins');
    this.resultsHolder = page.locator(".search-results-map-holder");
    this.sortByField = page.locator(".sort-filters .dropdown-trigger");
    this.priceDescending = page.getByRole("complementary").getByText("Цена ▼"); //only other option I see is by nth child...
    this.loadingIcon = page.locator(".results-loading");
    this.priceFilter = page.locator('[data-search-field="price-search"]');
    this.propertyMinPrice = page.locator(
      ".min-price[data-search-options='price-from']"
    );
    this.propNoMinOption = page.locator(
      ".min-price[data-search-options='price-from'] :first-child"
    );
    this.propertyMaxPrice = page.locator("#PropertyMaxPrice");
    this.propMaxOption4 = page.locator(
      '.max-price[data-search-options="price-to"] :nth-child(4)'
    );
    this.cardSearchPropResult = page.locator(".card-search").first();
    this.propertyModal = page.locator(".estate-wrapper");
    this.btnConnectWithBroker = page.locator(".broker-card-partial-send-msg");
    this.btnConnectBrokerSubmit = page.locator('type="submit"');
    this.brokerMessageModal = page.locator("#send-broker-message");
    this.btnSendBrokerMessage = page.locator('.modal-footer [type="submit"]');
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
