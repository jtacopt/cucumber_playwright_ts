import {After, Before, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, chromium, Page} from "@playwright/test";

let page: Page;
let browser: Browser;

setDefaultTimeout(20000);

Before(async () => {
    try {
        browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/used?");
        console.log(`Capture site title as ${await page.title()}`);
    } catch (error) {
        console.log(error)
    }
    return page;
});

After(async () => {
    await browser.close();
})

export {page, browser}