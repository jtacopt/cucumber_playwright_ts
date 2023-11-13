import {Page} from "@playwright/test";
import {page} from "../step_definitions/hook";

export class ShadowDom {

    private shadowRoot;
    private editFieldLocator: string = '#editField';
    private generateButtonLocator: string = '#buttonGenerate';
    private copyButtonLocator: string = '#buttonCopy';

    constructor(page: Page) {
        this.shadowRoot = page.locator('guid-generator');
    }

    async openPage() {
        await page.goto("http://www.uitestingplayground.com/shadowdom");
        console.log(`Capture site title as: ${await page.title()}`);
    }
    async generateUID() {
        await this.shadowRoot.locator(this.generateButtonLocator).click();
    }

    async readUID() {
        await this.shadowRoot.locator(this.editFieldLocator).inputValue();
    }


}