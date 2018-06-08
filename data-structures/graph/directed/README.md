# Directed Graphs

Digraph: Set of vertices connected pairwise by directed edges. Now the order of the pair matters. We say an edge goes from one vertex to another.

Digraph Applications

|      digraph       |       vertex        |       directed edge        |
| :----------------: | :-----------------: | :------------------------: |
|   transportation   | street intersection |       one-way street       |
|      food web      |       species       | predator-prey relationship |
|     financial      |        bank         |        transaction         |
| infectious disease |       person        |         infection          |

Digraph Problems

- Path: Is there a directed path from `s` to `t`?
- Shortest Path: What is the shortest path from `s` to `t`?
- Topological Sort: Can you draw a digraph so that all edges point upwards?
- Strong Connectivity: Is there a directed path between all pairs of vertices? Is there a directed path from `u` to `v` and `v` to `u`?
- Transitive Closure: Given vertices `v` and `w`, is there a path from `w` to `v`?
- PageRank: What is the important of a webpage? Web is one giant directed graph.

**Question**: How many different digraphs are there on `V` vertices? Allow self-loops but don't allow parallel edges.

**Answer**: 2<sup>(V<sup>2</sup>)</sup> - There are V<sup>2</sup> possible edges. Each edge is either in the digraph or not.

## Digraph API

```java
                  Digraph(int V)        // create an empty digraph with V vertices
             void addEdge(int v, int w) // add a directed edge v -> w
Iterable<Integer> adj(int v)            // vertices pointing from v
              int V()                   // number of vertices
              int E()                   // number of edges
          Digraph reverse()             // returns a digraph where all edges are reversed
```

As in undirected graphs, we use an adjacency-list to maintain the edges. Implementation is nearly identicaly. Only difference is edges are now only added in one direction.

**order of growth of running time of digraph operations by representation**

|  representation  |     space     | add edge | edge between v and w? | iterate over vertices adjacent to v? |
| :--------------: | :-----------: | :------: | :-------------------: | :----------------------------------: |
|  list of edges   |       E       |    1     |           E           |                  E                   |
| adjacency matrix | V<sup>2</sup> |   1\*    |           1           |                  V                   |
| adjacency lists  |     E + V     |    1     |     outdegree(v)      |             outdegree(v)             |

`*` - disallows parallel edges

**Question**: Suppose that a digraph `G` is represented using the adjacency-lists representation. What is the order of growth of the running time to find all vertices that point to a given vertex `v`?

**Answer**: `V + E` --> You must scan through each of the `V` adjacency lists and each of the `E` edges. If this were a common operation in digraph-processing problems, you could associate two adjacency lists with each vertex -- one containing all of the vertices pointing from `v` (as usual) and one containing all of the vertices pointing to `v`.

## Depth-First Search (DFS)

Reachability: Find all vertices reachable from `s` along a directed path.

Accomplish this using DFS.

Same method as for undirected graphs:

- Every undirected graph is a digraph (with edges in both directions).
- DFS is a `digraph` algorithm.

`DFS` (to visit a vertex `v`)

- Mark `v` as visited.
- Recursively visit all unmarked vertices `w` pointing from `v`.

Key Point: DFS algorithm is exactly the same between directed and undirected graphs.

DFS solves reachability problem.

**Question**: Suppose that during an execution of depth-first search in a digraph `G`, `dfs(v)` is called after `dfs(w)` is called but before `dfs(w)` returns. What _must_ be true of graph `G`?

**Answer**: There exists a directed path from `w` to `v`.

## Breadth-First Search (BFS)

Same method as for undirected graphs:

- Every undirected graph is a digraph (with edges in both directions).
- BFS is a `digraph` algorithm.

`BFS` (from source vertex `s`)

- Put `s` onto a FIFO queue, and mark `s` as visited.
- Repeat until the queue is empty:
  - remove the least recently added vertex `v`.
  - for each unmarked vertex pointing from `v`: add to queue and mark as visited.

**Proposition**: BFS computes shortest paths (fewest number of edges) from `s` to all other vertices in a graph in time proportional to `E + V`.

**Proof [correctness]**: Queue always consists of zero or more vertices of distance `k` from `s`, follow by zero or more vertices of distance `k + 1`, and so on.

**Proof [running time]**: Each vertex connected to `s` is visited once.

## Topological Sort

Precedence Scheduling

Have a set of tasks that must be completed, but you have precedence constraints. Given a set of tasks to be completed with precedence constraints, in which order should you schedule the tasks? Think of this as courses in a university curriculum.

Digraph model: vertex = task; edge = precedence constraint.

Topological sort works on a DAG (Directed Acyclic Graph). Can't solve this problem if you have a cycle.

Topological sort: Redraw DAG so all edges point upwards.

How to solve? Use DFS.

- Run DFS.
- Return vertices in reverse postorder.

**Proposition**: Reverse DFS postorder of a DAG is a topological order.
**Proof**: Consider any edge `v -> w`. When `dfs(v)` is called:

- Case 1: `dfs(w)` has already been called and return. Thus, `w` was done before `v`.
- Case 2: `dfs(w)` has not yet been called. `dfs(w)` will get called directly or indirectly by `dfs(v)` and will finish before `dfs(v)`. Thus, `w` will be done before `v`.
- Case 3: `dfs(w)` has already been called, but has not yet returned. Can't happen in a DAG: function call stack contains path from `w` to `v`, so `v -> w` would complete a cycle.

**Proposition**: A digraph has a topological order if no directed cycle.
Goal: Given a digraph, find a directed cycle. How? Use DFS.

Directed cycle detection application:

- spreadsheet recalculation
- cyclic inheritance (Java compiler does cycle detection)

## Strongly-Connected Components

Definition: Vertices `v` and `w` are `strongly connected` if there is a directed path from `v` to `w` `and` a directed path from `w` to `v`.

Key property. Strong connectivity is an `equivalence relation`:

- `v` is strongly connected to `v`.
- If `v` is strongly connected to `w`, then `w` is strongly connected to `v`.
- If `v` is strongly connected to `w` and `w` is strongly connected to `x`, then `v` is strongly connected to `x`.

This equivalence relation divides the digraph into sets called strongly-connected components that have the property that there are directed paths connecting each pair of vertices in the set.

Challenge is to compute the strong-components in digraphs. Can accomplish this using the `Kosaraju-Sharir algorithm`.

### Kosaraju-Sharir algorithm: intuition

Reverse graph. Strong components in `G` are same as in `G`<sup>`R`</sup>.

Kernel DAG. Contract each strong component into a single vertex.

Idea:

- Compute topological order (reverse postorder) in kernel DAG.
- Run DFS, considering vertices in reverse topological order.

### Kosaraju-Sharir algorithm

Phase 1. run DFS on `G`<sup>`R`</sup> to compute reverse postorder.

Phase 2. run DFS on `G`, considering vertices in order given by first DFS.

- i.e. given list of vertices, iterate across and run DFS on each (group vertices during DFS), will find that you can figure out what are the strongly-connected components

## Digraph-processing Summary

|                  topic                  |      algorithm       |
| :-------------------------------------: | :------------------: |
| single-source reachability in a digraph |         DFS          |
|        topological sort in a DAG        |         DFS          |
|     strong components in a digraph      | Kosaraju DFS (twice) |
