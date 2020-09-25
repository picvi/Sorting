const positions = {
    hr: "HR",
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    pm: "Project Manager",
    salesManager: "Sales Manager",
};

const retirementAge = {
    female: 58,
    male: 63,
};

const sex = {
    male: "male",
    female: "female"
};

function Person(firstName, lastName, birthDate, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.sex = sex;

    this.age = function () {
        now = new Date();
        let calculatedAge = now.getFullYear() - this.birthDate.getFullYear();
        
        if (this.birthDate.getMonth() <= now.getMonth()) {
        if (this.birthDate.getDate() >= now.getDate()){
                return calculatedAge - 1;
        }
        };

        return calculatedAge;
    };

    this.ageUntilRetirement = function (retirementAgeBySex = retirementAge.female) {
        return Math.abs(this.age() - retirementAgeBySex);
    };

    this.print = function () {
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Birth Date: ${this.birthDate}`);
        console.log(`Age: ${this.age()}`);
        console.log(`Sex: ${this.sex}`);     
    };
};

function Employee(person, position) {
    this.person = person;
    this.position = position;

    this.print = function () {
        this.person.print();
        console.log(this.position);
        console.log("===================");
    };
};

const adressBook = [
    new Employee(new Person("Tom", "Scavo", new Date(1980, 3, 15), sex.male), positions.hr),
    new Employee(new Person("Susan", "Mayer", new Date(1900, 8, 25), sex.female), positions.salesManager),
    new Employee(new Person("Andy", "Birsak", new Date(1970, 0, 1), sex.male), positions.backend),
    new Employee(new Person("Bonny", "Johnson", new Date(1999, 11, 28), sex.female), positions.frontend),
    new Employee(new Person("Lynette", "Scavo", new Date(1983, 7, 13), sex.female), positions.pm),

];

adressBook.filter((item) => item.person.sex === sex.male).forEach((employee) => {
    employee.print();
    employee.person.age() > retirementAge.male ? 
    console.log(`You have been retired for ${employee.person.ageUntilRetirement(retirementAge.male)} years`) 
    : console.log(`Until retirement you have ${employee.person.ageUntilRetirement(retirementAge.male)} years`);
    console.log("______________________");
});
