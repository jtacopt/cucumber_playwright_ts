import {Page} from "@playwright/test";

export class LocationPopup {

    private popup;
    private state;
    private continue;

    constructor(page: Page) {
        this.popup = page.locator('[data-test-id=modal-popup__location] [role=dialog]');
        this.state = this.popup.locator('select');
        this.continue = this.popup.locator('[data-test-id=state-selected-modal__close]')
    }

    async selectState(state: string) {
        await this.state.selectOption(state);
    }

    async clickContinue() {
        await this.continue.click();
    }
}