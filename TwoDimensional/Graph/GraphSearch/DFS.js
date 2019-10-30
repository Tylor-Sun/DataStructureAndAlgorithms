// Created Graph Node
function Node(value) {
    this.value = value;
    this.neighbor = [];
}
// Created Graph Structure
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(c);
b.neighbor.push(d);
b.neighbor.push(a);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(e);

// Achieved DFS
function GraphDFS(root, target, path) {
    if(root === null) return false;
    if(path.indexOf(root.value) > -1) return false;
    if(root.value === target) return true;
    path.push(root.value);
    let res = false;
    for(let i = 0; i < root.neighbor.length; i++) {
        res |= GraphDFS(root.neighbor[i], target, path);
    }
    return res ? true : false;
}

console.log(GraphDFS(a, 'f', []))
