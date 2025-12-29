import {test, expect} from '@playwright/test';

test('Verify network interception', async ({ page }) => {

    
    page.on('request', request =>  console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));
    
    // Abort Intercept network requests to a specific URL
    await page.goto('https://example.com');
    page.route('url', route => {
        //request modification done by abort
        route.abort();
    });
});