export class User {
    email: string;
    password: string;
    username: string;
    age: number;
    constructor(email: string, password: string, username: string, age: number){
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
    }
}
