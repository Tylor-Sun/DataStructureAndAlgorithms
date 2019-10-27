const arr = new Array(10000);// Create Array
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10000)
}

// 数组方法
let compareNumGeneral = 0; // 比较次数
const search = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        compareNumGeneral++;
        if(arr[i] == target) return true;
    }
    return false;
}
console.log(search(arr, 1000), compareNumGeneral)// true 806 Array-数组

// 二叉搜索树的方法
let compareNumBST = 0; //比较次数
const BinarySearchTree = require('./BinarySearchTree'); // 构建二叉搜索树
const SearchBST = require('./SearchBST'); // 二叉搜索树的查找
const flag = SearchBST(BinarySearchTree(arr), 1000, compareNumBST)
console.log(flag)// true 15 BST-二叉搜索树









