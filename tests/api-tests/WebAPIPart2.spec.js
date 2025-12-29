//login UI --> .json

//test browser --> .json
import {test, expect, request} from '@playwright/test'

let webContext;

test.beforeAll( async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://example.com/login');
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    webContext= await context.storageState({ path: 'state.json' }); 
    //save storage state to file automatically
    //after playwright.config.js
});

test('Login using API and set storage state', async () => {
    
    const page = await webContext.newPage({ storageState: 'state.json' });
    await page.goto('https://example.com/dashboard');
    // Add your assertions here
});


