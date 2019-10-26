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

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;


var a2 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a2.left = c1;
a2.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

// 没有考虑左右子树调换的情况
function CampareBinaryTree_1(root1, root2) {
    if (root1 == root2) return true; // 结点相等返回true,包括结点为null的情况
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;// 其中一个为空另一个不为空返回true
    if (root1.value != root2.value) return false; // 结点不相等返回false
    var leftTree = CampareBinaryTree_1(root1.left, root2.left);// 比较左子树
    var rightTree = CampareBinaryTree_1(root1.right, root2.right);// 比较右子树
    return leftTree && rightTree;// 每个递归函数都返回true则返回true
}

console.log(CampareBinaryTree_1(a1, a2))// true


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

a1.left = b1;// 此时结点a1的左子树等于a2的右子树
a1.right = c1;// 此时结点a1的左子树等于a2的右子树
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;


var a2 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a2.left = c1;
a2.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

// 考虑左右子树调换的情况
function CampareBinaryTree_2(root1, root2) {
    if (root1 == root2) return true; // 结点相等返回true,包括结点为null的情况
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;// 其中一个为空另一个不为空返回true
    if (root1.value != root2.value) return false; // 结点不相等返回false
    return CampareBinaryTree_2(root1.left, root2.left) && CampareBinaryTree_2(root1.right, root2.right)
        || CampareBinaryTree_1(root1.left, root2.right) && CampareBinaryTree_2(root1.right, root2.left);
    // 在之前的基础上只需要让root1的右子树和root2的左子树比较、root1的左子树和root2的右子树比较即可
}

console.log(CampareBinaryTree_2(a1, a2))// true
