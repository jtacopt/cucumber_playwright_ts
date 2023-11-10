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

    openPage() {
        page.goto("http://www.uitestingplayground.com/shadowdom");
    }
    async generateUID() {
        await this.shadowRoot.locator(this.generateButtonLocator).click();
    }

    async readUID() {
        await this.shadowRoot.locator(this.editFieldLocator).inputValue();
    }


}