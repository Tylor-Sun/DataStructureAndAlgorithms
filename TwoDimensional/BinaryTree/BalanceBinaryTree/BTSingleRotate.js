
var isBalance = require('./IsBalanceBinaryTree').isBalanceBinaryTree; // 平衡二叉树判断函数

var getDeep = require('./IsBalanceBinaryTree').getDeep; // 获取子树深度函数



function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node('2')
var node5 = new Node('5')
var node6 = new Node('6')
var node8 = new Node('8')

node2.right = node5;
node5.left = node6;
node5.right = node8;

/**
 * 左单旋
 * @param root
 * @returns {*}
 */
function rotateLeft(root) {
    // 找到新根：根节点的右孩子
    var newRoot = root.right;
    // 找到变化分支：根节点的右孩子的左子树
    var changeBranch = root.right.left;
    // 让旋转节点的右子树为变化分支
    root.right = changeBranch;
    // 让新根的左孩子为旋转节点
    newRoot.left = root;
    // 返回新根
    return newRoot;
}

/**
 * 右单旋
 * @param root
 * @returns {*}
 */
function rotateRight(root) {
    // 找到新根：为根节点的左孩子
    var newRoot = root.left;
    // 找到变化分支：根节点的左孩子的右子树
    var changeBranch = root.left.right;
    // 让旋转节点的左子树为变化分支
    root.left = changeBranch;
    // 让新根的右孩子为旋转节点
    newRoot.right = root;
    // 返回新根
    return newRoot;
}

/**
 * 二叉树的旋转
 * @param root
 * @returns {*}
 */
function transformToBBT(root) { // 返回平衡之后的节点
    if(isBalance(root)) return root; // 递归出口+严谨判断：直到是平衡树后返回根节点
    // 二叉树的旋转应该是自底向上 -> 因为整棵树的不平衡有可能因为底部的一棵子树不平衡导致的
    // 如果是这种情况，只需要改变这颗子树即可，不用该变整棵树，而是只改变了树的一部分提高了性能
    // 由于树的旋转是自底向上，所以应该将当前节点置为树底，再根据条件判断是否需要旋转
    if(root.left != null) root.left = transformToBBT(root.left); // 改变左子树
    if(root.right != null) root.right = transformToBBT(root.right); // 改变右子树
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) { // 此时该根节点所在的树是平衡二叉树
        return true;
    }else if(leftDeep > rightDeep) { // 左子树深、右子树浅 -> 右单旋
        return rotateLeft(root)
    }else { // 右子树深、左子树浅 ->  左单旋
        return rotateRight(root);
    }
}

console.log(transformToBBT(node2))
