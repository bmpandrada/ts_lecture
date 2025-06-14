// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var manPowe = ['bruce', 'wayne', 'batman'];
var manPoweSub = new (Array.bind.apply(Array, __spreadArray([void 0, 'bea', 'patricia', 'wonderwoman'], manPowe, false)))();
console.log(manPoweSub);
manPowe.push.apply(manPowe, manPoweSub);
console.log(manPowe);
var manPoweSet = new Set(manPowe);
console.log(manPoweSet);
var manSort = Array.from(manPoweSet).sort();
console.log(manSort);
var person = {
    age: 30,
    name: 'Max'
};
var person2 = __assign({}, person);
var add = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (numOne, numTwo) {
        return numOne + numTwo;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
