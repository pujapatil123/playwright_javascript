const {test, expect} = require('@playwright/test')
const {LoginPage} = require("../../pom/loginpage")
const {DashboardPage} = require("../../pom/dashboardpage")

const testData = JSON.parse(JSON.stringify(require('../../utils/testdata.json')));
const testDataArray = JSON.parse(JSON.stringify(require('../../utils/testdata2.json')));
const customTest = require('../../utils/customfixture');

test('Verify login using page object model', async ({page}) => {
   const url = 'https://example.com/login'; 
   //const username = "test_user";
   //const password = "abc123";

   const loginPage = new LoginPage(page);
   await loginPage.navigate(url);
   await loginPage.login(testData.username, testData.password);
    
   const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProduct('Sample Product');
});

for (const dataSet of testDataArray) {
test(`Verify multiple test - ${dataSet.username}`, async ({page}) => {
   const url = 'https://example.com/login'; 
      
   const loginPage = new LoginPage(page);
   await loginPage.navigate(url);
   await loginPage.login(dataSet.username, dataSet.password);
    
});
}

customTest('Verify custom fixture data', async ({page, testdataforLogin}) => {
   const url = 'https://example.com/login'; 
      
   const loginPage = new LoginPage(page);
   await loginPage.navigate(url);
   await loginPage.login(testdataforLogin.username, testdataforLogin.password);
    
});