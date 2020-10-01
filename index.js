const user = {
  name: "John",
  surname: "Smith",
  age: 30,

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

const admin = {
  __proto__: user,
};

admin.fullName = "Jerry Smith";

console.log(admin.name);
console.log(user.fullName);

for (const key in admin) {
  console.log(`admin's key: ${key}`);
};

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(bed.glasses);

let hamster = {
  stomach: [],

  eat(food) {
    if (!this.hasOwnProperty("stomach")) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
speedy.eat("nut");
lazy.eat("cheese")

console.log( speedy.stomach );
console.log( lazy.stomach );

const sumTo = (n) => {
  return (n == 1) ? n : n + sumTo(n - 1);
};

console.log(sumTo(100));

const factorial = (n) => {
  return (n === 1) ? n : n * factorial(n - 1);
}

console.log(factorial(5))

function sum( a) {
  return function(b) {
    return a + b;
  }
};

function summ(a) {
  let result = a;

  function f(b) {
    result += b;
    return f;
  }

  f.toString = function() {
    return result;
  };
  return f();
};



console.log(summ(1)(2)(3));

function inBetween( a, b) {
  return  function(x) {
    return a <= x && x <= b;
  };
};

function inArray(arg) {
  return function(x) {
    return arg.includes(x);
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let filtered = arr.filter(inArray([1, 2, 10]));
console.log(filtered);

function byField(string) {
  return (a, b) => a[string] > b[string] ? 1 : -1;
};

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField('age')));

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { 
      console.log(i)
  }

  shooters.push(shooter);
  }; 
  return shooters 
}

let army = makeArmy();

army[0]();


function calc() {
  let result = 0;
  function add() {
    return result++;
  }
  add.multiply = value => result *= value;

  return add;
};

calculator = calc();
calculator();
console.log(calculator.multiply(4));

// function printNmbers( from, to) {
//   for (let i = from; i < to; i++) {
//     console.log(i);
//   }
// };

// const int = setInterval(printNmbers, 1000, 2, 7);
// const tim = setTimeout(printNmbers, 1000, 1, 5 );

// setTimeout(() => {clearInterval(int)}, 8000);
// setTimeout(() => {clearTimeout(tim)}, 8000);

function work(a, b) {
  console.log(a + b);
};

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];
  return wrapper;
};

job = spy(work);
job(1, 3);
job(1, 6)

for (let args of job.calls) {
  console.log( 'call:' + args.join() ); 
};

function delay(func, time) {
  return function() {
    setTimeout(() => func.apply(this, arguments), time);
  };
}

let f1000 = delay(work(1, 4), 1000);
let f4000 = delay(console.log, 4000);
f1000;
f4000("test");

