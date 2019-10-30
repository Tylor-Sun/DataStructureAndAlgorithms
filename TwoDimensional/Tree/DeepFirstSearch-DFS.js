// Create Tree node
function Node(value) {
    this.value = value;
    this.children = [];
}

// Create Tree Structure
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f')
a.children.push(b);
a.children.push(c);
a.children.push(d);
d.children.push(e);
d.children.push(f)

// Achieved Deep First Search First
function TreeDFS(root, target){
    if(root === null) return false;
    if(root.value === target) return true;
    let resList = []
    for(let i = 0; i < root.children.length; i++) {
       resList.push(TreeDFS(root.children[i], target));
    }
    return resList.some(ele => ele);
}

// Achieved Deep First Search Second
function TreeDFS2(root, target){
    if(root === null) return false;
    if(root.value === target) return true;
    let result = false;
    for(let i = 0; i < root.children.length; i++) {
        result |= TreeDFS2(root.children[i], target) // |=或等于,一真则真;&=且等于, 全真为真
    }
    return result ? true : false;
}

console.log(TreeDFS2(a, 'c'))
