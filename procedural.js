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

const sex = {
    male: "male",
    female: "female"
};

function createEmployee(person, position) {
    return {
        person,
        position,
    }
};

function calculateAge(person) {
    now = new Date();
    let calculatedAge = now.getFullYear() - person.birthDate.getFullYear();

    if (person.birthDate.getMonth() <= now.getMonth()) {
       if (person.birthDate.getDate() >= now.getDate()){
            return calculatedAge - 1;
       }
    };

    return calculatedAge;
};

const adressBook = [
    createEmployee(createPerson("Tom", "Scavo", new Date(1980, 3, 15), sex.male), positions.hr),
    createEmployee(createPerson("Susan", "Mayer", new Date(1980, 8, 26), sex.female), positions.salesManager),
    createEmployee(createPerson("Andy", "Birsak", new Date(1970, 0, 1), sex.male), positions.backend),
    createEmployee(createPerson("Bonny", "Johnson", new Date(1999, 11, 28), sex.female), positions.frontend),
    createEmployee(createPerson("Lynette", "Scavo", new Date(1983, 7, 13), sex.female), positions.pm),

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

function calculateAgeUntilRetirement(person, retirementAgeBySex) {
    return Math.abs(calculateAge(person) - retirementAgeBySex)
};

adressBook.filter((item) => item.person.sex === sex.male).forEach((employee) => {
    printEmployee(employee);
    calculateAge(employee.person) > retirementAge.male ? 
    console.log(`You have been retired for ${calculateAgeUntilRetirement(employee.person, retirementAge.male)} years`) 
    : console.log(`Until retirement you have ${calculateAgeUntilRetirement(employee.person, retirementAge.male)} years`);
});
