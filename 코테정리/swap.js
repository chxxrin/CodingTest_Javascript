const arr = [1, 2, 3, 4, 5];
// 구조분해할당
[arr[1], arr[3]] = [arr[3], arr[1]];
console.log(arr);
