import {test,expect, request} from '@playwright/test'
import {ApiUtils} from "../../utils/APiUtils"

const loginPayload={userEmail:"", userPassword:""}
const orderPayload={productId:"", quantity:1}

let response;

test.beforeAll( async () => {
    //login API call
    const apiContext = await request.newContext()
    const apiUtils = new APiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
    

});

test("verify login", async ({page}) => {
    await page.addInitScript( value => {
         window.localStorage.setItem('token', value);
     }, response.token);

    
});
