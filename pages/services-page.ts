import type { Page, Locator } from "@playwright/test";
import { assertElementIsNotVisible, assertElementIsVisible } from "../utils";

export default class ServicesPage {
  readonly page: Page;
  readonly btnOnlineMessage: Locator;
  readonly contactMessageModal: Locator;
  readonly messageTextBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnOnlineMessage = page.locator('[href="/about/contactus"]');
    this.contactMessageModal = page.locator(".modal-content");
    this.messageTextBox = page.locator('[name="Message"]');
  }

  async goto() {
    await this.page.goto("https://www.yavlena.com/service/");
  }
}
