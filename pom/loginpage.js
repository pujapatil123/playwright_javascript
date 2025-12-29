class loginpage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async navigate(url) {
        await this.page.goto(url);
    }
}

 module.exports = {loginpage};