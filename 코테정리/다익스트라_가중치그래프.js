const dijkstra = (start) => {
  const pq = [[0, start]]; // 우선순위 큐 (거리, 노드)
  const dist = { [start]: 0 };

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]); // 거리 기준 정렬
    const [cost, here] = pq.shift();

    graph[here].forEach(([next, weight]) => {
      const newDist = cost + weight;
      if (newDist < (dist[next] ?? Infinity)) {
        dist[next] = newDist;
        pq.push([newDist, next]);
      }
    });
  }

  return dist;
};

const weightedGraph = {
  1: [
    [2, 3],
    [3, 5],
  ],
  2: [[4, 2]],
  3: [
    [4, 1],
    [5, 4],
  ],
  4: [],
  5: [],
};

console.log(dijkstra(1));
