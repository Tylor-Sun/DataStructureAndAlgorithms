var A = require('../BinaryTree.js');

// 先序遍历
function First(root){
    if(root == null) return; // 既是算法严谨性判断又是递归的出口
    console.log(root.value);
    First(root.left);
    First(root.right);
}
First(A);// ACFGBDE

// 中序遍历
function Mid(root){
    if(root == null) return ;
    Mid(root.left);
    console.log(root.value);
    Mid(root.right);
}
Mid(A);// FCGADBE

// 后序遍历
function Last(root) {
    if(root == null) return ;
    Last(root.left);
    Last(root.right);
    console.log(root.value);
}

Last(A)// FGCDEBA
