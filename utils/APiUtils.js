class APiUtils{
    //no need of assertions here its pre setup

    constructor(apiContext,loginPayload){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }
    async getToken(){
    const loginResponse= await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.loginPayload
            }
        )
        expect(loginResponse.ok()).toBeTruthy()
        const responseBody = await loginResponse.json()
         token = responseBody.token
    
        console.log("Token is "+ token)
        return token;
}

async createOrder(orderPayload){
    let response = {};
    response.token = await this.getToken();

    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create", 
            {
            data: orderPayload,
            headers: {
                Authorization:  response.token,
                'Content-Type': 'application/json'
            }
        });
      
        const orderResponseBody = await orderResponse.json();
        const orderId = orderResponseBody.order[0];
        response.orderId = orderId;

        return response;
}

}

export default { APiUtils };