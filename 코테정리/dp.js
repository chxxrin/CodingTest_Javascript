// 메모이제이션 기법을 사용하여
// 피보나치 수열을 효율적으로 계산하는 재귀 함수
// memo: 메모이제이션(기억 저장용 객체)
// → 이미 계산한 값을 저장해두는 역할.
const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1;

  // 이미 계산된 값이 memo={}에 있는지 확인
  // memo 객체에 idx 키가 존재하면 저장된 값을 반환!
  // → 중복 계산을 방지해서 성능을 최적화할 수 있음.
  if (idx in memo) return memo[idx];

  // memo={} 에 없으면 새로운 값 계산 & 저장
  // idx-1번째 피보나치 값과 idx-2번째 피보나치 값을 재귀 호출해서 계산
  // 계산한 값을 memo에 저장해서 다음에 같은 idx가 들어오면 재사용!
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  return memo[idx];
};

const ret = fibo(10);
console.log(ret);
