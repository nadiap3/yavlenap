import { expect, Locator } from "@playwright/test";

export const assertElementIsVisible = async (element: Locator) => {
  await expect(element).toBeVisible({ timeout: 15000 });
};

export const assertElementIsNotVisible = async (element: Locator) => {
  await expect(element).not.toBeVisible({ timeout: 15000 });
};

export const convertPricesToNumbers = (price: string) => {
  const numericValue = Number(price.replace(/[^\d€]/g, "").replace("€", ""));
  return numericValue;
};

export const safeInnerText = async (
  locator: Locator
): Promise<string | null> => {
  try {
    return await locator.innerText();
  } catch (error) {
    console.error(error);
    return null;
  }
};
