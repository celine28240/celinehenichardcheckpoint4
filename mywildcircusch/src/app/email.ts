export class Email {
    private firstname: string;
    private message: string;
    private email: string;
    private phone: string;

    constructor(firstname: string, email: string, phone: string, message: string, ){
        this.firstname = firstname;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }

    public getFirstname(){
        return this.firstname;
    };

    public getMessage(){
        return this.message;
    };

    public getEmail(){
        return this.email;
    };

    public getPhone(){
        return this.phone;
    }
}
