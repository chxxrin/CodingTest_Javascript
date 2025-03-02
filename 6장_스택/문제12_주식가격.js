function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0); // 가격이 떨어지지 않는 기간을 저장할 배열

  const stack = [0]; // 인덱스를 저장할 스택 선언

  for (let i = 0; i < n; i++) {
    // 가격이 떨어졌을 떄
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }
  return answer;
}
