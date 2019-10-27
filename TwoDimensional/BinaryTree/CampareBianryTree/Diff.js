function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = b1;
a1.right = c1;
b1.left = f1;
b1.right = g1;
c1.left = d1;
c1.right = e1;

var a2 = new Node('a');
var b2 = new Node('i');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');

a2.left = b2;
a2.right = c2;
b2.left = f2;
// b2.right = g2;
c2.left = d2;
c2.right = e2;


var diffList = [];

function DiffBinaryTree(root1, root2, diffList) {
    if (root1 == root2) return diffList;
    if (root1 == null && root2 != null) {
        diffList.push({type: 'add', origin: null, now: root2})
    } else if (root1 != null && root2 == null) {
        diffList.push({type: 'delete', origin: root1, now: null})
    } else if (root1.value != root2.value) {
        diffList.push({type: 'modify', origin: root1, now: root2 })
        // 坑：如果一个节点被修改不能立即结束判断，还要继续递归看他的子节点有没有被修改、或者删除、增加
        DiffBinaryTree(root1.left, root2.left, diffList);
        DiffBinaryTree(root1.right, root2.right, diffList);
    } else {
        DiffBinaryTree(root1.left, root2.left, diffList);
        DiffBinaryTree(root1.right, root2.right, diffList);
    }
    return diffList;
}

console.log(DiffBinaryTree(a1, a2, diffList))
//[ { type: 'modify',
//     origin: Node { value: 'b', left: [Node], right: [Node] },
//     now: Node { value: 'i', left: [Node], right: null } },
//   { type: 'delete',
//     origin: Node { value: 'g', left: null, right: null },
//     now: null } ]
