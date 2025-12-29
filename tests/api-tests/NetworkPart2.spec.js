import {test, expect} from '@playwright/test';

test('Security request network interception', async ({ page }) => {

    // Intercept network request call
    await page.goto('https://example.com');
    page.route('real url', route => {
        //request modification done by continue
        route.continue({ url: 'fake url' })
    })
});