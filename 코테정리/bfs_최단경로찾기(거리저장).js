// BFS는 최단 경로(Shortest Path) 탐색이 가능해!
// 거리를 저장하려면 dist 객체를 추가하면 돼.

const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

const bfsShortestPath = (start) => {
  const queue = [start];
  const visited = new Set([start]);
  const dist = { [start]: 0 }; // 시작점 거리 = 0

  while (queue.length) {
    const here = queue.shift();
    console.log(`노드: ${here}, 거리: ${dist[here]}`);

    graph[here].forEach((next) => {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
        dist[next] = dist[here] + 1; // 현재 노드의 거리 + 1
      }
    });
  }
};

bfsShortestPath(1);

// 노드: 1, 거리: 0
// 노드: 2, 거리: 1
// 노드: 3, 거리: 1
// 노드: 4, 거리: 2
// 노드: 5, 거리: 2
