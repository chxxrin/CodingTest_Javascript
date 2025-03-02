// 어떤 함수를 기반으로 새로운 배열을 만들어냄
// 배열로 반환

let numbers = [1, 2, 3, 4, 5];
let ret = numbers.map((e) => e * e);
console.log(ret);

// for문으로
let b = [];
for (let a of numbers) {
  b.push(a * a);
}
