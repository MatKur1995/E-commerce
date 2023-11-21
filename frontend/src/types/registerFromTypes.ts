export interface RegisterFromData {
    username: string;
    password: string;
    email: string;
    emailRepeat: string;
    firstName: string | null; // zezwól na string lub null
    lastName: string | null;
    address: string | null;
    street: string | null;
}
