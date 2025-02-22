import { Page } from "@playwright/test";
import { LoginPage } from "./login/login.page";
import { DashboardPage } from "./dashboard/dashboard.page";
import { Navigate } from "./utils/Navigate";
import { RegisterPage } from './register/register.page';
import { ItemsPage } from './items/items.page';

export class PageManager {

    private readonly page: Page;
    readonly loginPage: LoginPage;
    readonly dashboardPage: DashboardPage;
    readonly registerPage: RegisterPage;
    readonly itemsPage: ItemsPage;
    readonly navigate: Navigate;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.registerPage = new RegisterPage(page);
        this.itemsPage = new ItemsPage(page);
        this.navigate = new Navigate(page);
    }

    async loginSuccessfully(email: string, password: string) {
        await this.navigate.goToLoginPage()
        await this.loginPage.login(email, password)
        await this.dashboardPage.verifyWelcomeMessage()
    }
    
}
