// 주어진 코드에서는 하나의 시작점(dfs(1))에서 탐색을 시작
// 하지만 그래프가 연결되지 않은 경우 일부 노드는 방문되지 않음
// ✔ 해결 방법:
// 그래프 전체의 모든 정점을 탐색하려면 for 문을 돌면서 모든 정점을 시작점으로 DFS 실행해야 함.

const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

// DFS 함수 정의
const dfs = (here, visited) => {
  if (visited.has(here)) return; // 이미 방문한 노드는 패스
  visited.add(here); // 방문 처리
  console.log(here); // 현재 방문한 노드를 출력

  for (let next of graph[here]) {
    dfs(next, visited); // 인접한 노드에 대해 재귀 호출
  }
};

// 모든 정점에 대해 DFS 수행
const dfsAll = (graph) => {
  const visited = new Set();

  for (let here in graph) {
    // 모든 정점을 시작점으로 DFS 수행
    if (!visited.has(Number(here))) {
      dfs(Number(here), visited);
    }
  }
};

dfsAll(graph);
