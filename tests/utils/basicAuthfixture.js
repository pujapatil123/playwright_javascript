import {test as base} from '@playwright/test';

export const test = base. extend({
    login: async ({page}, use) => {
        await page.goto("https://example.com/login");
        await page.locator('#username', 'admin');
        await page.locator('#password', 'admin123');
        await page.locator('#loginButton').click();
        await use(page);
        await page.close();
    }
})
export const expect = test.expect;