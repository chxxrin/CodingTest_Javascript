const obj = {
    name : 'bomi',
    age : 10,
    'full-name' : 'park bomi'
};

console.log(obj.name);
console.log(obj['age']);
console.log(obj['full-name']); // 특수문자가 들어가면 반드시 ['key'] 로 접근

// 요소 추가
obj.hobby = 'eating';
console.log(obj.hobby);

// 요소 삭제
delete obj.hobby;
console.log(obj);