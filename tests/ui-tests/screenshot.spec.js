import {test} from '@playwright/test';

test('Take a screenshot', async ({ page }) => {
    await page.goto('https://example.com');
    //entire page screenshot
    await page.screenshot({ path: 'screenshot.png' });
    expect(await page.screenshot()).toMatchImageSnapshot();
    //only element screenshot
    const element =  page.locator('#h1');
    await element.screenshot({ path: 'element-screenshot.png' });
    //for visual testing
    expect(await element.screenshot()).toMatchSnapshot('.png');
});
