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


function GraphBFS(roots, target, path){
    if(roots === null || roots.length === 0)  return false;
    let children = [];
    for(let i = 0; i < roots.length; i++) {
        if(path.indexOf(roots[i]) > -1) continue;
        path.push(roots[i]);
        if(roots[i].value === target) return true;
        else children = children.concat(roots[i].neighbor);

    }
    return GraphBFS(children, target, path)
}

console.log(GraphBFS([a], 'c', []))
