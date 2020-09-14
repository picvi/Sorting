const names = ["James", "Mary", "Patricia", "Robert", "Linda", "David", "Susan", "Gabriel", "Alexander", "Christina"];
const surnames = ["Smith", "Johnson", "Williams", "Miller", "Thomas", "Jackson", "Clark", "Lopex", "Hill", "Lewis"];
const middleNames = ["Mae", "Lee", "Edward", "Avery", "Riley", "Parkel", "Peyton", "Quinn", "Reeze", "Rowan" ];

const getRandom = (array) => array[Math.floor(Math.random() * array.length)]; 
const getRandomDate = (x, y) => Math.floor(Math.random() * (x - y) + y);

const createPerson = () => ({
    name: getRandom(names),
    middleName: getRandom(middleNames),
    surname: getRandom(surnames),
    birthDate: new Date(getRandomDate(1950, 2020), getRandomDate(11, 0), getRandomDate(30, 1))
});

const people = [];

for (let i = 0; i < 10; i += 1) {
    let person = createPerson();
    people.push(person);
};

const comparePerson = (a, b) => {
    if (a.name == b.name) {
        if (a.middleName == b.middleName) {
            return a.surname < b.surname ? -1 : 1;
        }
        return a.middleName < b.middleName ? -1 : 1;
    }
    return a.name < b.name ? -1 : 1
};

const compareAge = (a, b) => a.birthDate < b.birthDate ? -1 : 1;

const bubbleSortAscending = (array, compare, direction) => {
      for (let j = 0; j < array.length - 1; j += 1) {
        for (let i = 0; i < array.length - 1; i += 1) {
            if (compare(array[i], array[i + 1]) === direction) {
                let position = array[i];
                array[i] = array[i + 1];
                array[i + 1] = position;
            } 
        }
    }        
}

bubbleSortAscending(people, compareAge, -1);

people.forEach((element) => console.log(element));

const getAge = (i) => Math.abs(new Date(Date.now() - people[i].birthDate).getUTCFullYear() - 1970);

let age = 0;
let counter = 0;

for (let i = 0; i < people.length; i++) {
    age += getAge(i);
    counter++;
}

console.log(`Average age is ${Math.round(age / counter)}`);