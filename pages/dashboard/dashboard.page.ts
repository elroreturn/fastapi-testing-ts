import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {

    private readonly page: Page;
    private readonly welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = this.page.getByText('Welcome back, nice to see you')
    }

    async verifyWelcomeMessage() {
        await expect(this.welcomeMessage).toBeVisible()
    }
    
}