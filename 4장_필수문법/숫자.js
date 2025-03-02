// 타입 : typeof
// 모두 number!
// JS는 자연수, 정수, 실수, 무한대까지 모두 number type
console.log(typeof 10);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof NaN);

let a = 13;
let b = 4;

// 산술연산
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(-a);

// Math.
console.log(Math.abs(-a)); // 절댓값
console.log(Math.ceil(a / b)); // 올림
console.log(Math.floor(a / b)); // 내림
console.log(Math.round(a / b)); // 반올림
console.log(Math.trunc(-a / b)); //버림 (정수부분만 가져오기)
console.log(Math.pow(a, b)); // a의 b승

// 숫자타입 비교연산
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// 숫자타입 비트연산(기호 1개) : 모두 2진수로 변환하여 계산됨
console.log(a & b); // AND, 4
console.log(a | b); // OR, 13
console.log(a ^ b); // XOR, 9
console.log(~a); // NOT, -14
console.log(a << 2); // 왼쪽 시프트(a에 2^2를 곱함)
console.log(a >> 2); // 오른쪽 시프트(a를 2^2를 나눔)

// 숫자타입 논리연산(기호 2개)
console.log(a && b); //AND,4
console.log(a || b); // OR,13
console.log(!a); //NOT, false

// 숫자타입 예외 : Infinity
console.log(a / 0);
console.log(a / null);

// 숫자타입 예외 : NaN
console.log(a % 0);
console.log(a / "string");
console.log(a % "string");
console.log(a % null);
console.log(a / undefined);
console.log(a % undefined);

// 부동소수점: 입실론
// JS는 부동소수점 데이터를 이진법으로 표현하므로 표현과정에서 오차가 발생함
console.log(Number.EPSILON);

let c = 0.1 + 0.1 + 0.1;
let d = 0.3;
console.log(c - d);

if (Math.abs(c - d) < Number.EPSILON) {
  console.log("c==d");
} else {
  console.log("c!=d");
}
