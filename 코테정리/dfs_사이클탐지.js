const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

// 현재 코드에서는 사이클(순환)이 있는 그래프에서 무한 루프 위험
// DFS로 사이클이 있는지 탐지하려면 추가적인 방문 상태가 필요
// ✔ 해결 방법:
// DFS 방문 상태를 visited뿐만 아니라 현재 탐색 중인지(stack) 체크해야 함.
const hasCycle = (here, visited = new Set(), stack = new Set()) => {
  if (stack.has(here)) return true; // 현재 탐색 중인 노드가 이미 stack에 있는지 확인, 만약 있다면 사이클이 존재하는 것
  if (visited.has(here)) return false; // 이미 방문한 노드인지를 확인, 방문한 노드는 이미 탐색을 완료했으므로 다시 탐색할 필요가 없고, 사이클 탐지에는 영향을 미치지 않습니다.

  visited.add(here); // 현재 노드를 방문 처리, 이후에 사이클 탐지에서 "방문한 노드"로 취급되어 다시 방문되지 않습니다.
  stack.add(here); // 현재 노드를 탐색 중인 노드로 추가, stack은 탐색 중인 노드들을 기록하는 집합

  // 현재 노드에서 인접 노드들을 차례로 탐색하면서, 인접 노드들이 사이클에 포함되는지 재귀적으로 확인
  for (let next of graph[here]) {
    if (hasCycle(next, visited, stack)) return true;
  }

  // 해당 노드의 모든 인접 노드들을 탐색한 후, 탐색이 끝났으므로 현재 노드를 stack에서 제거
  stack.delete(here); // 탐색이 끝나면 스택에서 제거
  return false;
};

console.log(hasCycle(1)); // 사이클이 있으면 true, 없으면 false
