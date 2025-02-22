import { Page, Locator, expect } from "@playwright/test";

export class ItemsPage {

    private readonly page: Page;
    private readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByRole('heading', { name: 'Items Management' })
    }

    async loaded() {
        await expect(this.title).toBeVisible()
    }
    
}