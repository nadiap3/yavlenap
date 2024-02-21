import type { Page, Locator } from "@playwright/test";
import { assertElementIsNotVisible, assertElementIsVisible } from "../utils";

export default class BrokersPage {
  readonly page: Page;
  readonly loadMoreBrokersBtn: Locator;
  readonly loadingIndicator: Locator;
  readonly officeWrapper: Locator;
  readonly officeInput: Locator;
  readonly officeLabelOptions: Locator;
  readonly brokerCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadMoreBrokersBtn = page.locator(".load-more-results-list");
    this.loadingIndicator = page.locator(".brokers-loading");
    this.officeWrapper = page.locator("div[data-prefix='Офис']");
    this.officeInput = page.locator(
      "div[data-prefix='Офис'] input.placeholder"
    );
    this.officeLabelOptions = page.locator(
      "div[data-prefix='Офис'] .checkbox-holder > label"
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
}
