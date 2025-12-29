const {base} = require('@playwright/test');

exports.customTest = base.extend({
    testdataforLogin: {
        username: "custom_user",
        password: "custom_password_789"
    }
});
