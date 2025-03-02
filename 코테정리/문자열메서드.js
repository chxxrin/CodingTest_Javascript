const str = "Hello, World!";

// substring: 시작 인덱스부터 끝 인덱스 전까지의 문자열을 반환
console.log(str.substring(0, 5)); // "Hello"

// slice: substring과 비슷하지만 음수 인덱스 사용 가능
// 주로 첫번째줄에는 테스트케이스, 2번째부터 n번째 줄까지는 어떤값, n+1번째줄부터 n+m번째 줄까지는 어떤 값일 때 사용
str.slice(1, n + 1);
str.slice(n + 1, n + m);

console.log(str.slice(-6)); // "World!"
console.log(str.slice(0, 5)); // "Hello"
