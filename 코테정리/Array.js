// 한 번에 배열 생성

// 일차원 배열은 .fill()
let a = Array(50).fill(0);
console.log(a);
// [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0
// ]

// 이차원 배열은 .fill().map()
// 5 x 5
let b = Array(5)
  .fill()
  .map((e) => Array(5).fill(0));
console.log(b);
// [
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ]
// ]
