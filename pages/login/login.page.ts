import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.getByRole('textbox', { name: 'Email' })
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' })
        this.loginButton = this.page.getByRole('button', { name: 'Log In' })

    }

    async loaded() {
        await expect(this.loginButton).toBeVisible()
    }

    async login(email: string, password: string) {
        await expect(this.loginButton).toBeVisible()

        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
    
}