import { expect, Locator } from "@playwright/test";

export const assertElementIsVisible = async (element: Locator) => {
  await expect(element).toBeVisible({ timeout: 10000 });
};

export const assertElementIsNotVisible = async (element: Locator) => {
  await expect(element).not.toBeVisible({ timeout: 10000 });
};

export const convertPricesToNumbers = (price: string) => {
  const numericValue = Number(price.replace(/[^\d€]/g, "").replace("€", ""));
  return numericValue;
};
