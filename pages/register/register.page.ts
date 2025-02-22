import { Page, Locator, expect } from "@playwright/test";
import { User } from "../../models/user.model";

export class RegisterPage {

    private readonly page: Page;
    private readonly fullNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly passwordConfirmationInput: Locator;
    private readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = this.page.getByRole('textbox', { name: 'Full Name' })
        this.emailInput = this.page.getByRole('textbox', { name: 'Email' })
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password', exact: true })
        this.passwordConfirmationInput = this.page.getByRole('textbox', { name: 'Confirm Password' })
        this.signUpButton = this.page.getByRole('button', { name: 'Sign Up' })

    }

    async signUp(user: User) {
        await expect(this.emailInput).toBeVisible()

        await this.fullNameInput.fill(user.fullname)
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password)
        await this.passwordConfirmationInput.fill(user.password)
        await this.signUpButton.click()
    }
    
}