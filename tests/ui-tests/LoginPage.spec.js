const {test, expect} = require('@playwright/test')
const {LoginPage} = require("../../pom/loginpage")
const {DashboardPage} = require("../../pom/dashboardpage")


test('Verify login using page object model', async ({page}) => {
   const url = 'https://example.com/login'; 
   const username = 'testuser';
   const password = 'password123';

   const loginPage = new LoginPage(page);
   await loginPage.navigate(url);
   await loginPage.login(username, password);
    
   const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProduct('Sample Product');
});
