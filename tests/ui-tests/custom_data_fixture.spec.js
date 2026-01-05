const {test, expect} = require('../utils/customfixture1');

test.only('Custom fixture test', async ({myFixture}) => {
 console.log(myFixture.name); // should print "example"
    expect(myFixture.env).toBe("QA");


})