class dashboardpage {
    constructor(page) {

        this.products= page.locator('.product-item');
        this.productText = page.locator('.product-item .product-name');
        this.cartButton = page.locator('#cart-button');

    }
    async searchProduct(productName) {
        const title = await this.productText.first().textContent();
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            const name = await this.products.nth(i).textContent();
            if (name === productName) {
                await this.products.nth(i).locator('button.add-to-cart').click();
            }
        }
       
    }



}