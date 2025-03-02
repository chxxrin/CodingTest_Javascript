// 배열의 구조 분해 할당
const arr = ['Hello', 'World', '!'];
const [first, second] = arr;
console.log(first, second);

// 객체의 구조 분해 할당
const obj = {
    name: 'bomi',
    age: 10
};
const {name, age} = obj;
console.log(name, age);

// swap
let a = 5;
let b = 10;
[a,b] = [b,a];
