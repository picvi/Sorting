const names = ["James", "Mary", "Patricia", "Robert", "Linda", "David", "Susan", "Gabriel", "Alexander", "Christina"];
const surnames = ["Smith", "Johnson", "Williams", "Miller", "Thomas", "Jackson", "Clark", "Lopex", "Hill", "Lewis"];
const middleNames = ["Mae", "Lee", "Edward", "Avery", "Riley", "Parkel", "Peyton", "Quinn", "Reeze", "Rowan" ];
const gender = ["male", "female"];

const getRandom = (array) => array[Math.floor(Math.random() * array.length)]; 
const getRandomDate = (x, y) => Math.floor(Math.random() * (x - y) + y);

const createPerson = () => ({
    name: getRandom(names),
    middleName: getRandom(middleNames),
    surname: getRandom(surnames),
    birthDate: new Date(getRandomDate(1950, 2020), getRandomDate(11, 0), getRandomDate(30, 1)),
    age() {
        let today = new Date;
        return today.getFullYear() - this.birthDate.getFullYear() },
    gender: getRandom(gender),
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

const bubbleSort = (array, compare, direction) => {
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

// bubbleSort(people, compareAge, 1);
// people.forEach((element) => console.log(element));

// people.sort((a, b) => {
//     if (a.age === b.age) {
//         return 0;
//     } return a.age > b.age ? 1 : -1;
// });

people.sort((a, b) => {
    if (a.middleName === b.middleName) {
        return 0;
    } return a.middleName > b.middleName ? 1 : -1;
    
})

const age = people.reduce((acc, people) => {
   return acc += people.age();
},0);

console.log(`Average age is ${Math.round(age / people.length)}`);

let edgeAge = people.
    filter((person) => person.gender === gender[1])
    .reduce(
        (ageValue, person) => {
        return ageValue.age() > person.age() ? ageValue : person;
}, people.find((person) => person.gender === gender[1]));

console.log(edgeAge);

console.log(people);

