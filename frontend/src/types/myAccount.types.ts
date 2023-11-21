export interface myAccountTypes {
    password: string;
    passwordRepeat: string;
    email: string;
    firstName: string | null; // zezwól na string lub null
    lastName: string | null;
}