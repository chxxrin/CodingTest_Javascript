// 사용자 목록에서 특정 조건의 사용자 찾기
const users = [
    { id: 1, name: '김철수', age: 25 },
    { id: 2, name: '이영희', age: 30 },
    { id: 3, name: '박민수', age: 28 }
];

// 나이가 28살 이상인 첫 번째 사용자 찾기
const adult = users.find(user => user.age >= 28);
console.log(adult); // { id: 2, name: '이영희', age: 30 }

// 객체 데이터 처리
const scores = {
    math: 90,
    english: 85,
    science: 95
};

// 과목별 점수 평균 계산
const average = Math.round(
    Object.values(scores).reduce((sum, score) => sum + score, 0) 
    / Object.keys(scores).length
);
console.log(average); // 90