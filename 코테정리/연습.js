const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return;
  visited.add(here);
  console.log(here);

  graph[here].forEach((next) => {
    dfs(next, visited);
  });
};

const dfsAll = (graph, visited = new Set()) => {
  for (let here in graph) {
    if (!visited.has(Number(here))) {
      dfs(Number(here), visited);
    }
  }
};

dfsAll(graph);
