# Graph

Definition: A set of vertices connected pairwise by edges.

## Terminology

Path: A sequence of vertices connected by edges.

Cycle: Path whose first and last vertices are the same.

Two vertices are connected if there is a path between them.

## Graph-Processing Problems

Path: Is there a path between `s` and `t`?

Shortest path: What is the shortest path between `s` and `t`?

Cycle: Is there a cycle in the graph?

## API

```java
                  Graph(int V)          // create an empty graph with V vertices
             void addEdge(int v, int w) // add an edge v-w
Iterable<Integer> adj(int v)            // vertices adjacent to v
              int V()                   // number of vertices
              int E()                   // number of edges
           String toString()            // string representation
```

## Graph-Processing Code Examples

```java
/*
 * compute the degree of v
 * degree of v is the number of vertices that are connected by an edge to v
 */
 public static int degree(Graph G, int v)
 {
   int degree = 0;
   for (int w: G.adj(v)) degree++;
   return degree;
 }
```

```java
/* compute maximum degree */
public static int maxDegree(Graph G)
{
  int max = 0;
  for (int v = 0; v < G.V(); v++)
    if (degree(G, V) > max)
      max = degree(G, V);
  return max;
}
```

## Adjacency-List Graph Representation
* Most widely used implementation.
* Maintain vertex-indexed array of lists.
* For every vertex, maintain a list of vertices that are adjacent to that vertex.
* Can use a Bag (Abstract Data Type) to hold the adjacent vertices.

## Graph Representations
**In Practice**:
* Use adjacency-lists representation.
* Most graph algorithms based on interating over vertices adjacent to `v`.
* Real-world graphs tend to be `sparse`.
    - Huge number of vertices.
    - Small average vertex degree.

**order of growth of running time of graph operations by representation**

| representation      | space           | add edge | edge between v and w? | iterate over vertices adjacent to v? |
| :-----------------: | :-------------: | :------: | :-------------------: | :----------------------------------: |
|  list of edges      |   E             |   1      |   E                   |   E                                  |
|  adjacency matrix   |   V<sup>2</sup> |   1*     |   1                   |   V                                  |
|  adjacency lists    |   E + V         |   1      |   degree(v)           |   degree(v)                          |

`*` - disallows parallel edges

## Depth-First Search

Goal: Systematically search through a graph.

Idea: Mimic maze exploration.

DFS (to visit a vertex v)
* Mark v as visited
* Recursively visit all unmarked vertices w adjacent to v.

Typical Applications:
* Find all vertices connected to a given source vertex.
* Find a path between two vertices.

**Design Pattern for Graph Processing**
Design pattern: Decouple graph data type from graph processing.
* Create a Graph object.
* Pass the Graph to a graph-processing routine.
* Query the graph-processing routine for information.

We do this because there are hundreds of graph-processing algorithms and so we can't put them all in the Graph API. The interface would be too fat.

Instead we can decouple the graph implementation from the graph-processing routines and only expose the graph-processing routines for querying.

```java
                  Paths(Graph G, int s) // find paths in G from source s
          boolean hashPathTo(int v) // is there a path from s to v?
Iterable<Integer> pathTo(int v) // path from s to v; null if no such path
```

```java
Paths paths = new Paths(G, s);
for (int v = 0; v < G.V(); v++)
  if (paths.hasPathTo(v))
    StdOut.println(v); // print all vertices connected to s
```

**Summary**

Goal: Find all vertices connected to `s` (and a corresponding path).

Idea: Mimic maze exploration.

Algorithm
* Use recursion.
* Mark each visited vertex (and keep track of edge taken to visit it).
* Return (retrace steps) when no unvisited options.

Data Structures
* both arrays are vertex-indexed
* `boolean[] marked` to mark visited vertices.
* `int[] edgeTo` to keep tree of paths.
    - (edgeTo[w] == v) means that edge `v-w` taken to visit `w` for first time

### Depth-First Search Properties
* DFS marks all vertices connected to `s` in time proportional to the sum of their degrees.
* After DFS, can find vertices connected to `s` in constant time and can find a path to `s` (if one exists) in time proportional to its length.

```java
public boolean hasPathTo(int v)
{ return marked[v]; }

public Iterable<Integer> pathTo(int v)
{
  if (!hasPathTo(v)) return null;
  Stack<Integer> path = new Stack<Integer>();
  for (int x = v; x != s; x = edgeTo[x])
    path.push(x);
  path.push(s);
  return path;
}
```

## Breadth-First Search

DFS: Put unvisited vertices on a `stack`.

BFS: Put unvisited vertices on a `queue`.

BFS solves shortest path problem:
* Find path from `s` to `t` that uses fewest number of edges.
* Works because BFS examines vertices in increasing distance from `s`.

BFS algorithm (from source vertex `s`):
* Put `s` onto a FIFO queue, and mark `s` as visited.
* Repeat the following until the queue is empty:
    - remove the least recently added vertex `v` (dequeue).
    - add each of `v`'s unvisited neighbors to the queue and mark them as visited.

**Proposition**: BFS computes shortest paths (fewest number of edges) from `s` to all other vertices in a graph in time proportional to `E + V`.

**Proof [correctness]**: Queue always consists of zero or more vertices of distance `k` from `s`, follow by zero or more vertices of distance `k + 1`, and so on.

**Proof [running time]**: Each vertex connected to `s` is visited once.

## Connected Components

**Def**: Vertices `v` and `w` are `connected` if there is a path between them.

**Goal**: Preprocess graph to answer queries of the form _is `v` connected to `w`?_ in `constant` time.

```java
        CC(Graph G)             // find connected components in G
boolean connected(int v, int w) // are v and w connected?
    int count()                 // number of connected components
    int id(int v)               // component identifier for v
```

The relation "is connected to" is an `equivalence relation`:
* Reflexive: `v` is connected to `w`.
* Symmetric: if `v` is connected to `w`, then `w` is connected to `v`.
* Transitive: if `v` is connected to `w` and `w` is connected to `x`, then `v` is connected to `x`.

**Def**: A `connected component` is a maximal set of connected vertices.

| v      | id[v] |
| :----: | :---: |
| 0      | 0     |
| 1      | 0     |
| 2      | 0     |
| 3      | 0     |
| 4      | 0     |
| 5      | 0     |
| 6      | 0     |
| 7      | 1     |
| 8      | 1     |
| 9      | 2     |
| 10     | 2     |
| 11     | 2     |
| 12     | 2     |

**Goal**: Partition vertices into connected components.

Connected components algorithm:
* Initialize all vertices `v` as unmarked.
* For each unmarked vertex `v`, run DFS to identify all vertices discovered as part of the same component.

**Connected Components Applications**
* Study spread of STDs
  - Vertices are individuals and edges are relations.
  - Connected components would be sub-populations in which any one member had a relation with another member in the sub-population.

* Particle detections (track moving particles over time)
  - Given grayscale image of particles, identify "blobs".
  - Vertex: pixel.
  - Edge: between two adjacent pixels with grayscale value >= 70 (black = 0, white = 255).
  - Blob: connected component of 20-30 pixels.

## Graph-Processing Challenges

* Is a graph bipartite? --> DFS.
* Does a graph have a cycle? --> DFS.
* Does a graph contain a (general) cycle that uses every edge exactly once? --> Eulerian tour.
