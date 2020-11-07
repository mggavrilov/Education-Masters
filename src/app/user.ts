export enum Roles {
    Normal,
    Administrator,
}

export class User {
    constructor(public username, public role, public email?) {
    }
    
    isAdmin() {
        return this.role === Roles.Administrator;
    }
}
