import type { Page, Locator } from "@playwright/test";
import { assertElementIsNotVisible, assertElementIsVisible } from "../utils";

export default class BrokersPage {
  readonly page: Page;
  readonly loadMoreBrokersBtn: Locator;
  readonly loadingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadMoreBrokersBtn = page.locator(".load-more-results-list");
    this.loadingIndicator = page.locator(".brokers-loading");
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/broker/");
  }

  async waitForBrokersLoaded() {
    await assertElementIsVisible(this.loadingIndicator);
    await assertElementIsNotVisible(this.loadingIndicator);
  }
}
