function solution(board, moves) {
  // board의 열 개수만큼 빈 배열을 생성하는 코드
  // 행 : board.length
  // 열 : board[0].length
  const lanes = [...new Array(board[0].length)].map(() => []);

  // board를 아래에서 위로 읽어서 lanes[j]에 넣어.
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  const bucket = []; // 바구니
  let answer = 0; // 터진 인형 개수

  for (let m of moves) {
    if (lanes[m - 1].length > 0) {
      // 해당 열에 인형이 있다면
      const doll = lanes[m - 1].pop(); // 맨 위의 인형을 뽑음

      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop(); // 같은 인형이면 터트림
        answer += 2; // 2개 사라지므로 카운트 증가
      } else {
        bucket.push(doll); // 다르면 바구니에 넣음
      }
    }
  }

  return answer;
}

// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// lanes = [
//   [3, 4], // 1번 열
//   [5, 2, 2], // 2번 열
//   [1, 4, 5, 1], // 3번 열
//   [3, 4], // 4번 열
//   [1, 2, 1, 3], // 5번 열
// ];
