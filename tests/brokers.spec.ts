import { test, expect, Locator } from "@playwright/test";
import BrokersPage from "../pages/brokers-page";
import { safeInnerText } from "../utils";

test.describe("brokers page tests", () => {
  let brokersPage: BrokersPage;

  test.beforeEach(async ({ page }) => {
    brokersPage = new BrokersPage(page);
    await brokersPage.goto();
  });

  test("brokers have complete information", async ({ page }) => {
    brokersPage.waitForBrokersLoaded();
    await brokersPage.loadMoreBrokersBtn.click();
    // TODO: Update wait strategy
    await page.waitForTimeout(900);

    const allBrokerElements = await page
      .locator(".broker-list > .broker-card")
      .all();

    const incompleteBrokers: { name: string; missingData: string[] }[] = [];

    for (const broker of allBrokerElements) {
      const brokerName = await safeInnerText(broker.locator(".name"));
      const brokerAddress = await safeInnerText(broker.locator(".office"));

      const [firstPhone, secondPhone] = await broker.locator(".tel").all();
      const firstPhoneText = await safeInnerText(firstPhone);
      const secondPhoneText = await safeInnerText(secondPhone);

      const missingFields: string[] = [];

      if (!brokerName) {
        missingFields.push("name");
      }
      if (!brokerAddress) {
        missingFields.push("address");
      }
      if (!firstPhoneText) {
        missingFields.push("mobile phone");
      }
      if (!secondPhoneText) {
        missingFields.push("office phone");
      }

      if (missingFields.length > 0) {
        incompleteBrokers.push({
          name: brokerName ?? "N/A",
          missingData: missingFields,
        });
      }
    }

    if (incompleteBrokers.length > 0) {
      incompleteBrokers.forEach((broker) => {
        // Print all incomplete brokers in console for easier debugging
        console.error(
          `The following broker: ${broker.name}, has these fields missing: ${broker.missingData}`
        );
      });
    }

    await expect(incompleteBrokers.length).toBe(0);
  });
});
