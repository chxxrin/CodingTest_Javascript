const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

// 깊이 우선 탐색(DFS)의 특성상 한 노드를 끝까지 탐색한 후, 백트래킹하여 다음 노드를 탐색합니다.
// Dfs를 할 때는 중복을 제거해야하므로 array보다 Set을 쓰는게 좋다
// 그래서 .push 대신 .add를 쓰고, .includes대신 .has를 쓴다!
// here: 현재 탐색 중인 노드
// visited = new Set(): 방문한 노드를 저장하는 Set (중복 방문 방지)
const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return; // 만약 이미 방문한 정점이라면 더 이상 탐색하지 않고 중단
  // 그게 아니라면 방문처리!
  visited.add(here); // visited에 현재 노드(here)를 추가 → 방문 처리, 이 때 visited는 Set객체이므로 push가 아니라 add를 써야함
  console.log(here); // 현재 방문한 노드를 출력

  // 그 다음걸 도는데, 이 때 재귀로 돈다!
  graph[here].forEach((next) => dfs(next, visited)); // 현재 노드(here)에 연결된 노드를 하나씩 가져와서 재귀 호출 (dfs(e, visited))
};

dfs(1); // 1,2,4,3,5
