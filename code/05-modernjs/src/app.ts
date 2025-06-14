// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);

// const person = {
//   firstName: 'Max',
//   age: 30
// };

// const copiedPerson = { ...person };

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

// const { firstName: userName, age } = person;

// console.log(userName, age, person);


const manPowe: string[] = ['bruce', 'wayne', 'batman'];

const manPoweSub = new Array('bea', 'patricia', 'wonderwoman', ...manPowe);
console.log(manPoweSub);

manPowe.push(...manPoweSub);
console.log(manPowe);

const manPoweSet = new Set(manPowe);
console.log(manPoweSet);

const manSort = Array.from(manPoweSet).sort();
console.log(manSort);


type Person = {
    age: number;
    name: string;
}


const person: Person = {
    age: 30,
    name: 'Max'
};

const person2: Person = { ...person};


const add = (...number: number[]) => {
    return number.reduce((numOne, numTwo)=> {
        return numOne + numTwo;
    }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);