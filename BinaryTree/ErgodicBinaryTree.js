var A = require('./BinaryTree.js');


function First(root){
    if(root == null) return; // 既是算法严谨性判断又是递归的出口
    console.log(root.value);
    First(root.left);
    First(root.right);
}
First(A);
console.log('====================================')
function Mid(root){
    if(root == null) return ;
    Mid(root.left);
    console.log(root.value);
    Mid(root.right);
}
Mid(A);
console.log('====================================')
function Last(root) {
    if(root == null) return ;
    Last(root.left);
    Last(root.right);
    console.log(root.value);
}
Last(A)
console.log('====================================')
