function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b
}


subtract(10, 5);

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

user.greet();



function greet(name: string, callback: (message: string) => void) {
  const greeting = `Hello, ${name}!`;
  callback(greeting);
}

function printMessage(msg: string) {
  console.log(msg);
}

// Tawagin ang greet at ipasa ang printMessage bilang callback



function logText(text:string) {
  console.log(text + ' you are welcome!');
}
 

function testPerformJob (messageOne:(message: string)=> void) {
   
    messageOne('Bruce');
}

testPerformJob(logText);


type User2 = {
  name: string;
  age: number;
  greet: () => void;
} 

let userN: User2 = {
  name: 'Bruce',
  age: 30,
  greet() {
    console.log('Hello, ' + this.name);
  }
}

testPerformJob(userN.greet);
user.greet();

console.log(user);