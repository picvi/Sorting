function createPerson(firstName, lastName, birthDate, sex) {
    return {
        firstName,
        lastName,
        birthDate,
        sex,
    }
};

const positions = {
    hr: "HR",
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    pm: "Project Manager",
    salesManager: "Sales Manager",
};

function createEmployee(person, position) {
    return {
        person,
        position,
    }
};

function calculateAge(person) {
    now = new Date();
    let calculatedAge = 0;
    
    if (now.getMonth() > person.birthDate.getMonth()) {
        calculatedAge = now.getFullYear() - person.birthDate.getFullYear();
    } else if ( person.birthDate.getMonth() === now.getMonth()) {
        if (now.getDate() >= person.birthDate.getDate()) {
            calculatedAge = now.getFullYear() - person.birthDate.getFullYear();
        } else {
            calculatedAge = (now.getFullYear() - person.birthDate.getFullYear()) - 1;
        }
    }
    else {
        calculatedAge = (now.getFullYear() - person.birthDate.getFullYear()) - 1;
    }

    return calculatedAge;
};

const adressBook = [
    createEmployee(createPerson("Tom", "Scavo", new Date(1980, 3, 15), "male"), positions.hr),
    createEmployee(createPerson("Susan", "Mayer", new Date(1980, 8, 25), "female"), positions.salesManager),
    createEmployee(createPerson("Andy", "Birsak", new Date(1970, 0, 1), "male"), positions.backend),
    createEmployee(createPerson("Bonny", "Johnson", new Date(1999, 11, 28), "female"), positions.frontend),
    createEmployee(createPerson("Lynette", "Scavo", new Date(1983, 7, 13), "female"), positions.pm),

];

function printPerson(person) {
    console.log(`First Name: ${person.firstName}`);
    console.log(`Last Name: ${person.lastName}`);
    console.log(`Birth Date: ${person.birthDate}`);
    console.log(`Age: ${calculateAge(person)}`);
    console.log(`Sex: ${person.sex}`);
};

function printEmployee(employee) {
    printPerson(employee.person);
    console.log(employee.position);
};

const retirementAge = {
    female: 58,
    male: 63,
};

function calculateAgeUntilRetirement(person, sex) {
    if (calculateAge(person) >= sex) {
        console.log(`You have been retired for ${calculateAge(person) - sex} years`);
    } 
    console.log(`Until retirement you have ${sex - calculateAge(person)} years`);
};

adressBook.filter((item) => item.person.sex === "female").forEach((employee) => {
    printEmployee(employee);
    calculateAgeUntilRetirement(employee.person, retirementAge.female);
});
