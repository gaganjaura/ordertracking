export class User {
    fullName: string;
    email: string;
    mobile: string;
    userId: string;
    role: string;

    constructor(name: string, email: string, mobile: string, userId: string, role: string) {
        this.fullName = name;
        this.email = email;
        this.mobile = mobile;
        this.userId = userId;
        this.role = role;
    }
}