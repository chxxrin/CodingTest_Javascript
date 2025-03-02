// 배열 병합
const evenNumbers = [2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers);

// 객체 병합
const person = {
    name: 'bomi park',
    familyName:'park',
    givenName: 'bomi',
    country: 'Korea',
};

const address = {
    country: 'USA',
    city: 'LA',
};

const merge = {...person, ...address};
console.log(merge);