// 根据数组每一位构建一个二叉搜索树
var arr = [ 18, 87, 0, 32, 94, 58, 83, 30, 13, 86 ]

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if(root == null ) return;
    if(root.value == num) return; // 去重
    if(num < root.value) {// 左子树添加
        if(root.left == null) {
            root.left = new Node(num);
        } else {
            addNode(root.left , num);
        }
    } else { // 右子树添加
        if(root.right == null) {
            root.right = new Node(num);
        } else {
            addNode(root.right, num)
        }
    }
}

function BinarySearchTree(arr) {
    if(arr == null || arr.length == 0) return null;
    var root = new Node(arr[0])
    for (var i = 0; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

module.exports = BinarySearchTree;
