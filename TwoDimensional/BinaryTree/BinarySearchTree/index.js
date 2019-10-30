const arr = new Array(10000);// Create Array
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10000)
}

// 数组方法
let compareNumGeneral = 0;
const search = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        compareNumGeneral++;
        if(arr[i] == target) return true;
    }
    return false;
}
console.log(search(arr, 1000), compareNumGeneral)//

// 二叉搜索树的方法
const BinarySearchTree = require('./BinarySearchTree'); // 将数组构建成二叉搜索树
const SearchBST = require('./SearchBST');
let compareNumBST = 0;
const BSTRes = SearchBST(BinarySearchTree(arr), 1000, compareNumBST)
console.log(BSTRes)//


// 平衡二叉树搜索树方法-左右、右左双旋
const transformToBBT = require('../BalanceBinaryTree/BTDoubleRotate')
let compareNumBBST = 0;
const BBSTRes = SearchBST(transformToBBT(BinarySearchTree(arr)), 1000, compareNumBBST)
console.log(BBSTRes)//

// 判断经过双旋(单旋+左右双旋+右左双旋)的二叉搜索树是否平衡？
const isBalance = require('../BalanceBinaryTree/IsBalanceBinaryTree').isBalanceBinaryTree;
console.log(isBalance(transformToBBT(BinarySearchTree(arr))))// false


// 平衡二叉树搜索树方法-最终版旋转满足所有情况
const transformToBBT_Last = require('../BalanceBinaryTree/BTDoubleRotate_2')
let compareNumBBST_2 = 0;
const BBSTRes_2 = SearchBST(transformToBBT_Last(BinarySearchTree(arr)), 1000, compareNumBBST_2)
console.log(BBSTRes_2)//

// 判断经过双旋(左左双旋+左右双旋+右左双旋+右右双旋)的二叉搜索树是否平衡？
console.log(isBalance(transformToBBT_Last(BinarySearchTree(arr))))// false

// true 3915      数组
// true 17        二叉搜索树
// true 13        单旋+双旋(左右、右左)
// false          没有平衡
// true 13        单旋+双旋(左右、右左、左左、右右)
// true            完全平衡
