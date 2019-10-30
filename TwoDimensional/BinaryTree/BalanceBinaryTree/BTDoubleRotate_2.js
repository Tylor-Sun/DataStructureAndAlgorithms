const isBalance = require('./IsBalanceBinaryTree').isBalanceBinaryTree; // 平衡二叉树判断函数
const getDeep = require('./IsBalanceBinaryTree').getDeep; // 获取子树深度函数

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const node8 = new Node('8')
const node7 = new Node('7')
const node6 = new Node('6')
const node5 = new Node('5')
const node2 = new Node('2')

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;

/**
 * 左单旋
 * @param root
 * @returns {*}
 */
function rotateLeft(root) {
    const newRoot = root.right;
    const changeBranch = root.right.left;
    root.right = changeBranch;
    newRoot.left = root;
    return newRoot;
}
/**
 * 右单旋
 * @param root
 * @returns {*}
 */
function rotateRight(root) {
    const newRoot = root.left;
    const changeBranch = root.left.right;
    root.left = changeBranch;
    newRoot.right = root;
    return newRoot;
}

/**
 * 二叉树的旋转-单旋+左右双旋+右左双旋+左左双旋+右右双旋
 * @param root
 * @returns {*}
 */
function transformToBBT_Last(root) {
    if(isBalance(root)) return root;
    if(root.left != null) root.left = transformToBBT_Last(root.left);
    if(root.right != null) root.right = transformToBBT_Last(root.right);
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    }else if(leftDeep > rightDeep) { // 左子树深、右子树浅 -> 右单旋
        // 右左双旋
        const changeBranchDeep = getDeep(root.left.right); // 变化分支的深度
        const noChangeBranchDeep = getDeep(root.left.left); // 不变分支的深度
        // 如果变化分支是唯一深的分支先进行左旋
        if(changeBranchDeep > noChangeBranchDeep) {
            root.left = rotateLeft(root.left);
        }
        // 右右双旋
        let newRoot = rotateRight(root); // 第一次右旋：得到新根
        newRoot.right = transformToBBT_Last(newRoot.right); // 第二次旋转：对新根的右子树进行判断并旋转
        newRoot = transformToBBT_Last(newRoot); // 第三次旋转：对新根判断并旋转
        return newRoot;
    }else { // 右子树深、左子树浅 ->  左单旋
        const changeBranchDeep = getDeep(root.right.left); // 变化分支的深度
        const noChangeBranchDeep = getDeep(root.right.right); // 不变分支的深度
        if(changeBranchDeep > noChangeBranchDeep) {
            root.right = rotateRight(root.right);
        }
        // 左左双旋-不一定两次都是左旋
        let newRoot = rotateLeft(root); // 第一次左旋：得到新根
        newRoot.left = transformToBBT_Last(newRoot.left); // 第二次旋转：对新根的左子树进行判断并旋转
        newRoot = transformToBBT_Last(newRoot); // 第三次旋转：对新根判断并旋转
        return newRoot;
    }
}


module.exports = transformToBBT_Last;
