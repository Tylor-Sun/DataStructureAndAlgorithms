function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')
const h = new Node('h')
const i = new Node('i')

a.left = b;
a.right = c;
b.left = d;
// b.right = e;
c.left = f;
c.right = g;
d.left = h;
// d.right = i;

function getDeep(root) {
    if(root == null) return 0;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBalanceBinaryTree(root) {
    if(root == null) return true;
    const leftHeight = getDeep(root.left);
    const rightHeight = getDeep(root.right);
    if(Math.abs(leftHeight  - rightHeight) > 1) return false;
    else return  isBalanceBinaryTree(root.left) && isBalanceBinaryTree(root.right);
}

console.log(isBalanceBinaryTree(a))// false
