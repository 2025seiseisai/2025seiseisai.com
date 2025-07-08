import { test } from "@playwright/test";

test("Test", async ({ page }) => {
    await page.goto("http://localhost:3000/2025");
    await page.pause();
});
