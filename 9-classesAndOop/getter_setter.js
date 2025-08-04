class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password}divyansh`;
    }
    set password(value){
        this._password=value
    }
}

const Divyansh=new User("d@gmail.com","abc")
console.log(Divyansh.password);
console.log(Divyansh.email);
