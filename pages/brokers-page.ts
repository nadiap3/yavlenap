import type { Page, Locator } from "@playwright/test";
import { assertElementIsNotVisible, assertElementIsVisible } from "../utils";

export default class BrokersPage {
  readonly page: Page;
  readonly loadMoreBrokersBtn: Locator;
  readonly loadingIndicator: Locator;
  readonly officeInput: Locator;
  readonly officeLabelOptions: Locator;
  readonly brokerCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadMoreBrokersBtn = page.locator(".load-more-results-list");
    this.loadingIndicator = page.locator(".brokers-loading");
    this.officeInput = page.locator("[data-filter='offices'] #serviceChoice");
    this.officeLabelOptions = page.locator(
      "[data-container='broker-offices'] > label"
    );

    this.brokerCards = page.locator(".broker-list > .broker-card");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/broker/");
  }
  async waitForBrokersLoaded() {
    await assertElementIsVisible(this.loadingIndicator);
    await assertElementIsNotVisible(this.loadingIndicator);
  }
  async waitForLoad() {
    this.page.locator('div[style*="display: block"]');
    this.page.locator('div[style*="display: none"]');
  }
}
