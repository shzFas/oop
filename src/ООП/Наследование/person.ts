class Person { // Класс Человек
    private _firstName;
    private _lastName;
    private _age;
    // Добавляем 3 свойства как в примере
    // Имя, Фамилия и Возраст
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get fullName() {
        return `Фамилия - ${this._lastName} Имя - ${this._firstName}`
    }

    // Для каждого поля геттер и сеттер
    set lastName(value) {
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(value) {
        this._firstName = value
    }

    get firstName() {
        return this.firstName
    }

    // Для возраста изменить сеттер чтобы возраст не был меньше нуля
    set age(value) {
        if(value < 0) {
            this._age = 0
        } else {
            this._age = value;
        }
    }

    get age() {
        return this._age;
    }
}

class Employee extends Person { // Класс работник, наследуемся от Класса Person через extends
    private _iin;
    private _number;
    private _serial;
    // 
    constructor(firstName, lastName, age, iin, number, serial) {
        super(firstName, lastName, age); // В первую очередь будет вызван родительский конструктор Person
        this._iin = iin; // Только потом будут действия в Классе Employee
        this._number = number;
        this._serial = serial;
    }
}

class Developer extends Employee { // Класс разработчик, наследуемся от Класса Employee через extends
    private _level;
    private _language;

    constructor(firstName, lastName, age, iin, number, serial, level, language) {
        super(firstName, lastName, age, iin, number, serial);
        this._level = level;
        this._language = language
    }
}

const human = new Developer("Ivan", "Ivanov", 15, 25, 30, 504, "Senior", "Java");
console.log(human.fullName);