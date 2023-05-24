import {ElementHandle, Page} from "@playwright/test";

export class CookieBanner {

    private cookieBannerShadowRoot;
    private acceptAllButton;

    constructor(page: Page) {
        this.cookieBannerShadowRoot = page.locator('cmm-cookie-banner');
        this.acceptAllButton = this.cookieBannerShadowRoot.locator('cmm-buttons-wrapper .wb-button--accept-all');
    }

    async acceptAll() {
        await this.acceptAllButton.click();
    }
}