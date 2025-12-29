import {test, expect} from '@playwright/test';

test('Verify network interception', async ({ page }) => {

    // Intercept network requests to a specific URL
    await page.goto('https://example.com');
    page.route("url",
        async route => {
            //intercepting response- api response--> playwright fake response--browser
            const response = await page.request.fetch(route.request());
            //response modification done by fulfill
            route.fulfill({
                response,
                body: JSON.stringify({ message: 'Hello from Playwright!' })
            });
        }
    )
});