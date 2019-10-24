// 数组的内容明确
var arr1= [1, 2, 3]

// 数组具体内容不明确       推荐：性能好
var arr2 = new Array(10)


// 遍历

// function ergodicArray(arr) {
//     // 算法必须有严谨性判断，如果算法某一个位置出现报错，算法无效
//     if(arr === null) return ;
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// ergodicArray(arr1)// 1,2,3

// 递归遍历
function ergodicArrar_2(arr, i){
    if(arr == null || arr.length <= i) return ;
    console.log(arr[i]);
    ergodicArrar_2(arr, ++i);
}
ergodicArrar_2(arr1, 0); // 1 、2 、3
