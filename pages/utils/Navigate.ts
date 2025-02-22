import { Page } from "@playwright/test";

export class Navigate {

    private readonly page: Page;
    private readonly BASE_URL = process.env.WEB_URL as string

    constructor(page: Page) {
        this.page = page;
    }

    async goToDefaultPage() {
        await this.page.goto(this.BASE_URL)
    }

    async goToLoginPage() {
        await this.page.goto(this.BASE_URL + '/login')
    }

    async goToDashboardPage() {
        await this.page.goto(this.BASE_URL + '/dashboard')
    }

    async goToRegisterPage() {
        await this.page.goto(this.BASE_URL + '/signup')
    }

    async goToItemsPage() {
        await this.page.goto(this.BASE_URL + '/items')
    }

}