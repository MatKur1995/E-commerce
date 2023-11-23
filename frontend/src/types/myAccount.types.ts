export interface myAccountTypes {
    password: string;
    passwordRepeat: string;
    email: string;
    emailRepeat: string;
    firstName: string | null;
    lastName: string | null;
}

export interface myAccountAddress {
    street: string;
    address: string;
    firstName: string | null;
    lastName: string | null;
}