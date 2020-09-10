const names = ["James", "Mary", "Patricia", "Robert", "Linda", "David", "Susan", "Gabriel", "Alexander", "Christina"];
const surnames = ["Smith", "Johnson", "Williams", "Miller", "Thomas", "Jackson", "Clark", "Lopex", "Hill", "Lewis"];
const middleNames = ["Mae", "Lee", "Edward", "Avery", "Riley", "Parkel", "Peyton", "Quinn", "Reeze", "Rowan" ];

const getRandom = (array) => array[Math.floor(Math.random() * array.length)]; 

const Person = function ()  {
    this.name = getRandom(names),
    this.middleName = getRandom(middleNames),
    this.surname = getRandom(surnames)
    this.birthDate = Math.floor(Math.random() * (90 - 10)) + 10; 
};

const people = [];

for (let i = 0; i < 30; i++) {
    let person = new Person();
    people.push(person);
};

const bubbleSortAscending = (array, description, description2, description3) => {
    let swap = (i) => {
        let position = array[i];
        array[i] = array[i + 1];
        array[i + 1] = position;
    }
    for (let j = 0; j < array.length - 1; j += 1) {
        for (let i = 0; i < array.length - 1; i += 1) {
            if (array[i][description] > array[i + 1][description]) {
                swap(i);
            } else if (array[i][description] === array[i + 1][description]) {
                if (array[i][description2] > array[i + 1][description2]) {
                    swap(i);
                } continue;
            } else if (array[i][description2] === array[i + 1][description2]) {
                if (array[i][description3] > array[i + 1][description3]) {
                    swap(i);
                } continue;
            }
        }
    }        
}

const bubbleSortDescending = (array, description, description2, description3) => {
    let swap = (i) => {
        let position = array[i];
        array[i] = array[i + 1];
        array[i + 1] = position;
    }
    for (let j = 0; j < array.length - 1; j += 1) {
        for (let i = 0; i < array.length - 1; i += 1) {
            if (array[i][description] < array[i + 1][description]) {
                swap(i);
            } else if (array[i][description] === array[i + 1][description]) {
                if (array[i][description2] < array[i + 1][description2]) {
                    swap(i);
                } continue;
            } else if (array[i][description2] === array[i + 1][description2]) {
                if (array[i][description3] < array[i + 1][description3]) {
                    swap(i);
                } continue;
            }
        }
    }        
}


bubbleSortDescending(people, 'surname', 'name', 'middleName');
// bubbleSortAscending(people, 'name', 'surname', 'middleName');
// bubbleSortDescending(people, 'middleName', 'surname', 'name');


for (i = 0; i < people.length; i++) {
    console.log(people[i]);
};

const age = (array) => {
    let sumAge = 0;
    let ages = [];
    
    for (let i = 0; i < array.length; i += 1) {
        sumAge += array[i].birthDate;
        ages.push(array[i].birthDate);
        
    }
    const average = Math.round(sumAge / people.length); 
    
    max = Math.max.apply(null, ages);
    min = Math.min.apply(null, ages);

    return {
        averageAge : average,
        minAge : min,
        maxAge : max,
    }
}

console.log(age(people));