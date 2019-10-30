// Create Tree node
function Node(value) {
    this.value = value;
    this.children = [];
}

// Create Tree Structure
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f')
a.children.push(b);
a.children.push(c);
a.children.push(d);
d.children.push(e);
d.children.push(f)


// Achieved Bread First Search
function TreeBFS(roots, target) {
    if(roots === null || roots.length === 0 ) return false;
    let children = [];
    for(let i =0; i < roots.length ; i ++){
        if(roots[i].value === target) return true;
        else children = children.concat(roots[i].children);
    }
    return TreeBFS(children, target);
}

console.log(TreeBFS([a], 'a'))
