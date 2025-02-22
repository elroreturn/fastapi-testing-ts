export class GlobalUsers {

    static getMainUser(): string {
        return process.env.MAIN_USER as string;
    }

    static getMainUserPassword(): string {
        return process.env.MAIN_USER_PWD as string;
    }
}