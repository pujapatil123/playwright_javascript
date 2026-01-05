import {test as base} from '@playwright/test';

export const test = base.extend({
    myFixture: async ({}, use) =>{
        const myData = {
            name : "example",
            env : "QA"
        };
        await use(myData);
    }


})

export const expect = test.expect;