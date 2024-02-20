import { expect, Locator } from "@playwright/test";

export const assertElementIsVisible = async (element: Locator) => {
  await expect(element).toBeVisible();
};
