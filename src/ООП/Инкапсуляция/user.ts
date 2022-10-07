class User {
    private _username;
    private _password
    private _id;

    constructor(username: any, password: any) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }

    public get username() { 
        return this._username;
    }
    public set username(value) {
        this._username = value;
    }
    public get password() { 
        return this._password;
    }
    public set password(value) {
        this._password = value;
    }
    public get id() {
        return this._id;
    }

} 

const user = new User('Ivan', 'qwerty');
console.log(user)
/* поменять можно только юзера и пароль, так как вызывается сеттер на 2 свойства, а у айди нету сеттера */