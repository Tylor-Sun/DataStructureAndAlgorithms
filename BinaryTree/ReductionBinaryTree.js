var first = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
var mid = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];
var last = ['F', 'G', 'C', 'D', 'E', 'B', 'A'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function reductionBinaryTree_1(firstArr, midArr) {
    if (firstArr == null || midArr == null || firstArr.length == 0 || midArr.length == 0 || firstArr.length != midArr.length) return null;
    var root = new Node(firstArr[0]);
    var index = midArr.indexOf(root.value); // 获取根节点在中序遍历的位置
    var firstLeftTree = firstArr.slice(1, index + 1); // 求出先序遍历中根节点的左子树
    var firstRightTree = firstArr.slice(index + 1, firstArr.length); // 求出先序遍历中根节点的右子树
    var midLeftTree = midArr.slice(0, index); // 求中序遍历的左子树
    var midRightTree = midArr.slice(index + 1, midArr.length); // 求出中序遍历的右子树
    root.left = reductionBinaryTree_1(firstLeftTree, midLeftTree);// 递归先序遍历的左子树、中序遍历的左子树
    root.right = reductionBinaryTree_1(firstRightTree, midRightTree);// 递归先序遍历的右子树、中序遍历的右子树
    return root;
}

var res = reductionBinaryTree_1(first, mid);

console.log(res.left)
console.log(res.right)
console.log('====================================================')

function reductionBinaryTree_2(lastArr, midArr) {
    if (lastArr == null || midArr == null || lastArr.length == 0 || midArr.length == 0 || lastArr.length != midArr.length) return null;
    var root = new Node(lastArr[lastArr.length - 1]);
    var index = midArr.indexOf(root.value);
    var lastLeftTree = lastArr.slice(0, index);
    var lastRightTree = lastArr.slice(index, lastArr.length - 1);
    var midLeftTree = midArr.slice(0, index);
    var midRightTree = midArr.slice(index + 1, midArr.length);
    root.left = reductionBinaryTree_2(lastLeftTree, midLeftTree);
    root.right = reductionBinaryTree_2(lastRightTree, midRightTree);
    return root;
}
var res = reductionBinaryTree_2(last, mid);
console.log(res.left);
console.log(res.right);
