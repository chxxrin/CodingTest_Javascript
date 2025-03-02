let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// 오름차순
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 내림차순
numbers = numbers.sort((a, b) => (a - b) * -1);
console.log(numbers);

// 문자열 오름차순 : sort()
let strings = ["a", "c", "e", "k", "b"];
strings = strings.sort();
console.log(strings);

// 문자열 내림차순 : sort((a,b)=>b.localeCompare(a))
let strings3 = ["a", "c", "e", "k", "b"];
strings3 = strings3.sort((a, b) => b.localeCompare(a)); // 문자열 내림차순 정렬
console.log(strings3);

// 문자열 내림차순 : sort().reverse()

let strings4 = ["a", "c", "e", "k", "b"];
strings4 = strings4.sort().reverse();
console.log(strings4);

// 배열을 그냥 역순으로 : reverse()
let strings2 = ["a", "c", "e", "k", "b"];
strings2 = strings2.reverse();
console.log(strings2);
