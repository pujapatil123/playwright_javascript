import {test, expect} from '../utils/basicAuthfixture';
test('Login test with custom login fixture', async ({login}) => {
   
    await login.goto("https://example.com/dashboard");

    expect(await login.title()).toBe("Dashboard - Example");

})