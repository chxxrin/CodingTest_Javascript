// 현재 코드에서는 간선의 가중치(비용)가 없는 그래프만 탐색 가능
// 만약 가중치(예: graph = {1: [[2, 3], [3, 5]]})가 있다면 DFS 코드 수정 필요
// ✔ 해결 방법:
// 재귀 호출 시 간선 가중치 정보를 고려한 DFS 작성

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

const dfsWeighted = (node, visited = new Set()) => {
  if (visited.has(node)) return;
  visited.add(node);
  console.log(node);

  weightedGraph[node].forEach(([next, weight]) => {
    console.log(`Edge ${node} -> ${next}, weight: ${weight}`);
    dfsWeighted(next, visited);
  });
};

dfsWeighted(1);
