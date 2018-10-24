export class User {
    Id: number;
    UserName : string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    IsReveiwer: boolean;
    IsAdmin: boolean;

    constructor() {
        this.Id = 0;
        this.IsReveiwer = false;
        this.IsAdmin = false;
    }
}
