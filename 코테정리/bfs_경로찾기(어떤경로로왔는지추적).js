const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

const bfsFindPath = (start, end) => {
  const queue = [start];
  const visited = new Set([start]);
  const prev = { [start]: null }; // 이전 노드 기록

  while (queue.length) {
    const here = queue.shift();
    if (here === end) break; // 목표 도달하면 종료

    graph[here].forEach((next) => {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
        prev[next] = here; // 이전 노드 기록
      }
    });
  }

  // 역추적하여 경로 생성
  let path = []; // 이 배열에 역추적을 통해 찾은 노드들을 목표 노드부터 시작해서 차례대로 넣을 것
  // 현재 노드 at의 이전 노드를 prev 객체에서 찾아 at 변수에 저장합니다. 즉, 역추적을 진행
  for (let at = end; at !== null; at = prev[at]) {
    path.push(at); //  현재 노드를 path 배열에 추가합니다. 이렇게 추가된 노드는 목표 노드에서부터 시작한 역순의 경로
  }
  path.reverse(); // 경로는 목표 노드에서 시작하여 시작 노드까지 역추적한 순서이므로, 이 배열을 뒤집어야 정확한 순서대로 경로가 나오게 됩니다.
  return path;
};

console.log(bfsFindPath(1, 5)); // [1, 3, 5]
