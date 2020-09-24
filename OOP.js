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

function Person(firstName, lastName, birthDate, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.sex = sex;

    this.age = function () {
        now = new Date();
        let calculatedAge = 0;

        if (now.getMonth() > this.birthDate.getMonth()) {
            calculatedAge = now.getFullYear() - this.birthDate.getFullYear();
        } else if ( this.birthDate.getMonth() === now.getMonth()) {
            if (now.getDate() >= this.birthDate.getDate()) {
                calculatedAge = now.getFullYear() - this.birthDate.getFullYear();
            } else {
                calculatedAge = (now.getFullYear() - this.birthDate.getFullYear()) - 1;
            }
        }
        else {
            calculatedAge = (now.getFullYear() - this.birthDate.getFullYear()) - 1;
        }

        return calculatedAge;
    };

    this.ageUntilRetirement = function (retirementAgeBySex = retirementAge.female) {
        if (this.age() >= retirementAgeBySex) {
            console.log(`You have been retired for ${this.age() - retirementAgeBySex} years`);
        } 
        console.log(`Until retirement you have ${retirementAgeBySex - this.age()} years`);
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
    new Employee(new Person("Tom", "Scavo", new Date(1980, 3, 15), "male"), positions.hr),
    new Employee(new Person("Susan", "Mayer", new Date(1980, 8, 25), "female"), positions.salesManager),
    new Employee(new Person("Andy", "Birsak", new Date(1970, 0, 1), "male"), positions.backend),
    new Employee(new Person("Bonny", "Johnson", new Date(1999, 11, 28), "female"), positions.frontend),
    new Employee(new Person("Lynette", "Scavo", new Date(1983, 7, 13), "female"), positions.pm),

];

adressBook.filter((item) => item.person.sex === "female").forEach((employee) => {
    employee.print();
    employee.person.ageUntilRetirement(retirementAge.female);
    console.log("______________________");
});
