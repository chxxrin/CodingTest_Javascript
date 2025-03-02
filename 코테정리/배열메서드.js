// find: 조건을 만족하는 첫 번째 요소를 반환
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((num) => num > 10); // 12

// findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 반환
const index = numbers.findIndex((num) => num > 10); // 1

// includes: 배열에 특정 요소가 포함되어 있는지 확인
// 주로 문자열 2개가 나오고 a문자열에 b문자열 패턴이 있는지 확인할 때 사용
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
