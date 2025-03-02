// 현재 코드는 방문한 순서를 출력하지만, 경로를 저장하지 않음
// 특정 노드까지의 경로를 찾는 문제에서는 추적용 배열이 필요
// ✔ 해결 방법:
// 경로 배열(path)을 만들어 저장하면 해결 가능!

const findPath = (start, end, path = [], visited = new Set()) => {
  if (visited.has(start)) return false;
  visited.add(start);
  path.push(start);

  if (start === end) return true; // 목적지 도착 시 true 반환

  for (let next of graph[start]) {
    if (findPath(next, end, path, visited)) return path; // 경로 찾으면 반환
  }

  path.pop(); // 경로가 아니라면 백트래킹
  return false;
};

console.log(findPath(1, 5)); // [1, 3, 5]
