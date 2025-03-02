const person = {
    name: '김철수',
    age: 25,
    city: '서울'
};

// Object.keys: 객체의 키들을 배열로 반환
console.log(Object.keys(person)); // ['name', 'age', 'city']

// Object.values: 객체의 값들을 배열로 반환
console.log(Object.values(person)); // ['김철수', 25, '서울']

// Object.entries: 키-값 쌍을 배열로 반환
console.log(Object.entries(person)); 
// [['name', '김철수'], ['age', 25], ['city', '서울']]

