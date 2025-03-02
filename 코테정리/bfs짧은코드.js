const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

// bfs는 순회와 동시에 탐색!
// visited.add()를 하면 queue.push()도 함!
// visited는 Set() 으로 관리! 그래서 .has, .add 를 사용
// queue는 Array [] 로 관리! 그래서 .push 를 사용
const bfs = (here) => {
  const queue = [here]; // 탐색할 노드를 저장하는 큐
  const visited = new Set([here]); // 방문한 노드를 저장하는 Set

  while (queue.length) {
    const here = queue.shift(); // 큐에서 노드 꺼내기
    console.log(here); // 현재 방문한 노드 출력

    graph[here].forEach((next) => {
      // 방문했으면 패스
      if (!visited.has(next)) {
        // 방문하지 않은 노드만 순회하고, 방문한다!
        visited.add(next);
        queue.push(next);
      }
    });
  }
};

bfs(1); // 1, 2, 3, 4, 5
